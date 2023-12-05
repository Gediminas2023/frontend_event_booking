import http from "../api/DB";
import React, { useContext, useEffect, useState } from "react";

const SettingsContext = React.createContext();

export const useSettings = () => {
  return useContext(SettingsContext);
};

export const SettingsApiContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [dateList, setDateList] = useState([]);

  const getDate = async () => {
    try {
      const db = await http.get("/settings/date");
      const formattedDates = db.data.map((item) => ({
        ...item,
        date: new Date(item.date),
      }));

      setDateList(formattedDates);
    } catch (error) {
      console.error("Error fetching date:", error);
    }
  };
  const saveAndUpdateDate = async (data) => {
    await data.forEach((e) => {
      http.post("/settings/date", e);
    });
    await getDate();
  };

  const deleteDataById = async (id) => {
    await http.delete(`/settings/date/${id}`);
    await getDate();
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getDate();
      setLoading(false);
    };

    fetchData();
  }, []);

  const value = {
    loading,
    dateList,
    saveAndUpdateDate,
    deleteDataById,
  };

  return (
    <SettingsContext.Provider value={value}>
      {!loading && children}
    </SettingsContext.Provider>
  );
};
