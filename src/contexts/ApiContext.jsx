import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const AppointmentContext = React.createContext();

export const useAppointment = () => {
  return useContext(AppointmentContext);
};

export const ApiContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  const getUser = async () => {
    const db = await axios.get("http://localhost:8080/api/users");
    setUsers(db.data);
  };
  const saveUser = async (data) => {
    await axios.post("http://localhost:8080/api/users", data);
    await getUser();
  };
  const getUserById = async (id) => {
    const db = await axios.get(`http://localhost:8080/api/users/${id}`);
    setUser(db.data);
  };
  const deleteUserById = async (id) => {
    await axios.delete(`http://localhost:8080/api/users/${id}`);
    await getUser();
  };
  const updateUserById = async (id, data) => {
    await axios.put(`http://localhost:8080/api/users/${id}`, data);
    await getUser();
  };
  const blockUserById = async (id, data) => {
    await axios.put(`http://localhost:8080/api/users/${id}`, data);
    await getUser();
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getUser();
      setLoading(false);
    };

    fetchData();
  }, []);

  const value = {
    loading,
    users,
    getUserById,
    user,
    deleteUserById,
    updateUserById,
    saveUser,
    blockUserById,
  };

  return (
    <AppointmentContext.Provider value={value}>
      {!loading && children}
    </AppointmentContext.Provider>
  );
};
