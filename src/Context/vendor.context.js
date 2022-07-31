import React, { useState } from "react";
import { createContext } from "react";

export const VendorContext = createContext();

export const VendorProvider = ({ children }) => {
  const [refresher, setRefresher] = useState(0);
  return (
    <VendorContext.Provider value={{ refresher, setRefresher }}>
      {children}
    </VendorContext.Provider>
  );
};
