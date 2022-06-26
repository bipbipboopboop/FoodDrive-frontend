import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // cart contains many products
  const defaultCart = [
    { productName: "Spaghetti", quantity: 1, price: 5.0 },
    { productName: "Ice Lemon Tea", quantity: 1, price: 1.0 },
    { productName: "Pinky Pasty", quantity: 1, price: 7.5 },
  ];
  const [cart, setCart] = useState(defaultCart);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
