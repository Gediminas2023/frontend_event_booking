import React, { useContext, useEffect, useState } from "react";
import http from "../api/DB";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AppointmentContext = React.createContext();

export const useAppointment = () => {
  return useContext(AppointmentContext);
};

export const ApiContext = ({ children }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const [eventListByStuff, setEventListBySuff] = useState([]);

  const getUser = async () => {
    await http
      .get("/users")
      .then((user) => {
        setUsers(user.data);
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  const saveUser = async (data) => {
    await http
      .post("/auth/signup", data)
      .then(() => {
        getUser();
        toast.success("User created successfully!");
      })
      .catch((err) => toast.error(err.response.data.message));
  };
  const getUserById = async (id) => {
    await http
      .get(`/users/${id}`)
      .then((data) => setUser(data.data))
      .catch((err) => toast.error(err.response.data.message));
  };

  const deleteUserById = async (id) => {
    await http
      .delete(`/users/${id}`)
      .then(() => {
        getUser();
        toast.success("Deleted!");
      })
      .catch((err) => toast.error(err.response.data.message));
  };
  const updateUserById = async (id, data) => {
    await http
      .put(`/users/${id}`, data)
      .then((e) => {
        toast.success(e.data);
        getUser();
      })
      .catch((err) => toast.error(err.response.data.message));
  };
  const blockUserById = async (id, data) => {
    await http
      .put(`/users/${id}`, data)
      .then(() => {
        getUser();
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  const saveEvent = async (id, data) => {
    await http
      .post(`/events/${id}/create`, data)
      .then((e) => {
        navigate("/profile"), toast.success(e.data);
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  const deleteEventById = async (id) => {
    await http
      .delete(`/events/${id}`)
      .then(() => {
        toast.success("Deleted!");
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  const getEventsByStuff = async (id) => {
    await http
      .get(`/events/byStuffId/${id}`)
      .then((data) => setEventListBySuff(data.data))
      .catch((err) => toast.error(err.response.data.message));
  };

  const value = {
    users,
    getUser,
    getUserById,
    user,
    deleteUserById,
    updateUserById,
    saveUser,
    blockUserById,
    saveEvent,
    deleteEventById,
    getEventsByStuff,
    eventListByStuff,
  };

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  );
};
