import React, { createContext, useState } from "react";
import { useEffect } from "react";
import useModal from "../Hooks/useModal";
import { getUserInfo } from "../Services/auth.services";
import Signin from "../Components/Modals/Signin.modal";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserInfo());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVendor, setIsVendor] = useState(false);

  const { open, handleOpen, handleClose } = useModal();

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
      const userInfo = getUserInfo();
      userInfo && setIsVendor(userInfo.is_vendor);
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
        openSignInModal: handleOpen,
      }}
    >
      <Signin open={open} handleClose={handleClose} />
      {children}
    </UserContext.Provider>
  );
};
