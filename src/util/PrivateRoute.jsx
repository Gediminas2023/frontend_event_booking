import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { authUser } = useAuthContext();
  if (authUser && authUser) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
