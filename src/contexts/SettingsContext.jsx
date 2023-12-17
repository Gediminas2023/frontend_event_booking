import http from "../api/DB";
import React, { useContext, useEffect, useState } from "react";

const SettingsContext = React.createContext();

export const useSettings = () => {
  return useContext(SettingsContext);
};

export const SettingsApiContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [dateList, setDateList] = useState([]);
  const [dateListByStuff, setDateListBySuff] = useState([]);

  const getDate = async () => {
    try {
      const db = await http.get("/dashboard/settings/date");
      const formattedDates = db.data.map((item) => ({
        ...item,
        date: new Date(item.date),
      }));

      setDateList(formattedDates);
    } catch (error) {
      console.error("Error fetching date:", error);
    }
  };

  const getDateByStuff = async (id) => {
    try {
      const db = await http.post("/dashboard/settings/date/stuff", {
        stuffId: id,
      });
      const formattedDates = db.data.map((item) => ({
        ...item,
        date: new Date(item.date),
      }));
      setDateListBySuff(formattedDates);
    } catch (error) {
      console.error("Error fetching date:", error);
    }
  };

  const saveAndUpdateDate = async (data) => {
    await data.forEach((e) => {
      http.post("/dashboard/settings/date", e);
    });
  };

  const deleteDataById = async (id) => {
    await http
      .delete(`/dashboard/settings/date/${id}`)
      .then(() => {
        getDate();
      })
      .catch((err) => console.log(err));
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
    getDateByStuff,
    dateListByStuff,
  };

  return (
    <SettingsContext.Provider value={value}>
      {!loading && children}
    </SettingsContext.Provider>
  );
};
