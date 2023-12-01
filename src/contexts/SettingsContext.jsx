import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const SettingsContext = React.createContext();

export const useSettings = () => {
  return useContext(SettingsContext);
};

export const SettingsApiContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [dateList, setDateList] = useState([]);

  const getDate = async () => {
    const db = await axios.get("http://localhost:8080/api/settings/date");
    const formattedDates = db.data.map((item) => ({
      ...item,
      date: new Date(item.date),
    }));

    setDateList(formattedDates);
  };
  const saveAndUpdateDate = async (data) => {
    await data.forEach((e) => {
      axios.post("http://localhost:8080/api/settings/date", e);
    });
    await getDate();
  };

  const deleteDataById = async (id) => {
    await axios.delete(`http://localhost:8080/api/settings/date/${id}`);
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
