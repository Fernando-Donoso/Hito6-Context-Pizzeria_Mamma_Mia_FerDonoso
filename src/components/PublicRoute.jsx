import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function PublicRoute({ children }) {
  const { token } = useContext(UserContext);

  return token ? <Navigate to="/" replace /> : children;
}

