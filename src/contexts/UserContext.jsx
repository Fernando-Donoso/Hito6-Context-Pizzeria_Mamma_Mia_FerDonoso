import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  // token simulado: parte en true
  const [token, setToken] = useState(true);
  console.log("UserContext token:", token); // ← DEBUG
  // método logout: cambia token a false
  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
}
