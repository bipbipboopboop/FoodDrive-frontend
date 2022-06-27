import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { getAuth } from "../Services/auth.services";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    if (auth !== null) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
