import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function ProtectedRoute({ children }) {
  const { token } = useContext(UserContext);

  return token ? children : <Navigate to="/login" replace />;
}

