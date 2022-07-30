import { createContext, useState, useEffect, useContext } from "react";
import { storeMyCart } from "../Services/1.cart.services";
import { UserContext } from "./user.context";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [cartItems, setCartItems] = useState();
  const [cartRefresher, setCartRefresher] = useState(0);

  useEffect(() => {
    storeMyCart({ setter: setCartItems });
  }, [cartRefresher, user]);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, cartRefresher, setCartRefresher }}
    >
      {children}
    </CartContext.Provider>
  );
};
