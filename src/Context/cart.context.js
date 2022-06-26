import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // cart contains many products
  const defaultCart = [
    {
      id: 1,
      reviews: [
        {
          product: 1,
          shop: null,
          customer: 1,
          description: "This Spaghetti is creamy",
          date: "2022-06-23",
        },
      ],
      title: "Spaghetti",
      description: "Carbonara, may contain milk",
      unit_price: 5.0,
      stock: 999,
      shop: 1,
      image: "",
      quantity: 1,
    },
  ];
  const [cart, setCart] = useState(defaultCart);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
