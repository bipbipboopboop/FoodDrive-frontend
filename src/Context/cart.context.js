import { createContext, useState, useEffect } from "react";
import { storeMyCart } from "../Services/1.cart.services";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState();
  const [cartRefresher, setCartRefresher] = useState(0);

  useEffect(() => {
    storeMyCart({ setter: setCartItems });
  }, [cartRefresher]);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, cartRefresher, setCartRefresher }}
    >
      {children}
    </CartContext.Provider>
  );
};
