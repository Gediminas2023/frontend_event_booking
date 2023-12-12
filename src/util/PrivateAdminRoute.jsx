import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const PrivateAdminRoute = ({ children }) => {
  const { authUser } = useAuthContext();
  const admin = authUser && authUser.roles.map((e) => e === "ROLE_ADMIN");
  const stuff = authUser && authUser.roles.map((e) => e === "ROLE_MODERATOR");
  if (JSON.parse(admin) || JSON.parse(stuff)) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PrivateAdminRoute;
