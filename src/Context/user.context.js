import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { getAuth, getUserInfo } from "../Services/auth.services";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserInfo());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVendor, setIsVendor] = useState(
    // getUserInfo() && getUserInfo().is_vendor // Very toxic code and should be changed
    false
  );

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
      getUserInfo() && setIsVendor(getUserInfo().is_vendor); // Very toxic code and should be changed
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        isVendor,
        setIsVendor,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
