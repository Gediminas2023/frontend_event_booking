import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const SettingsContext = React.createContext();

export const useSettings = () => {
  return useContext(SettingsContext);
};

export const SettingsApiContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState([]);

  const getDate = async () => {
    const db = await axios.get("http://localhost:8080/api/settings/date");
    const formattedDates = db.data.map((item) => ({
      ...item,
      date: new Date(item.date),
    }));

    setDate(formattedDates);
  };
  const saveDate = async (data) => {
    await data.map((e) => {
      axios.post("http://localhost:8080/api/settings/date", e);
    });
  };

  const deleteDataById = async (id) => {
    await axios.delete(`http://localhost:8080/api/settings/date/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getDate();
      setLoading(false);
    };
    fetchData();
  }, []);

  const value = {
    loading,
    date,
    saveDate,
    getDate,
    deleteDataById,
  };

  return (
    <SettingsContext.Provider value={value}>
      {!loading && children}
    </SettingsContext.Provider>
  );
};
