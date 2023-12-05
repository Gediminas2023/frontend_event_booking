import http from "../api/DB";
import React, { useContext, useEffect, useState } from "react";

const AppointmentContext = React.createContext();

export const useAppointment = () => {
  return useContext(AppointmentContext);
};

export const ApiContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const [errors, setErrors] = useState();

  const getUser = async () => {
    await http
      .get("/users")
      .then((data) => {
        setUsers(data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const saveUser = async (data) => {
    setErrors("");
    await http
      .post("/users", data)
      .then(() => {
        // getUser();
        setLoading(false);
        console.log(1);
      })
      .catch((err) => setErrors(err.response.data.validationErrors));
  };
  const getUserById = async (id) => {
    await http
      .get(`/users/${id}`)
      .then((data) => setUser(data.data))
      .catch((err) => console.log(err));
  };
  const deleteUserById = async (id) => {
    await http
      .delete(`/users/${id}`)
      .then(() => {
        getUser();
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const updateUserById = async (id, data) => {
    await http
      .put(`/users/${id}`, data)
      .then(() => {
        getUser();
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const blockUserById = async (id, data) => {
    await http
      .put(`/users/${id}`, data)
      .then(() => {
        getUser();
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      // await getUser();
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
    errors,
  };

  return (
    <AppointmentContext.Provider value={value}>
      {!loading && children}
    </AppointmentContext.Provider>
  );
};
