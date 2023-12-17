import axios from "axios";
const API_ENDPOINT = "http://localhost:8080/api";

const api = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-type": "application/json",
  },
});

const auth = JSON.parse(window.localStorage.getItem("auth"));
if (auth) {
  api.defaults.headers.common["Authorization"] = `Bearer ${auth.token}`;
}

export default api;
