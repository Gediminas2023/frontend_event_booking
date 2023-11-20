import axios from "axios";

export const db = await axios.get("http://localhost:8080/api/users");
