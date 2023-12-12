import React, { useContext, useEffect, useState } from "react";
import http from "../api/DB";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = React.createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthUserContext = ({ children }) => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState();
  const [success, setSuccess] = useState(false);

  const signup = (username, email, password) => {
    http
      .post("/auth/signup", { username, email, password })
      .then(() => {
        navigate("/");
        toast.success("You are signup successfully! Please login.");
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  const login = (username, password) => {
    http
      .post("/auth/login", { username, password })
      .then((user) => {
        setAuthUser(user.data);
        window.localStorage.setItem("auth", JSON.stringify(user.data));
        navigate("/");
        toast.success("You are login successfully!");
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  const logout = () => {
    window.localStorage.removeItem("auth");
    setAuthUser(null);
  };

  useEffect(() => {
    setAuthUser(JSON.parse(window.localStorage.getItem("auth")));
  }, [success]);

  const value = { authUser, login, success, logout, signup };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
