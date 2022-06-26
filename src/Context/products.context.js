import React, { createContext, useState } from "react";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();
  return (
    <ProductProvider.Provider value={(products, setProducts)}>
      {children}
    </ProductProvider.Provider>
  );
};
