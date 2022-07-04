import React, { useContext } from "react";
import { CartContext } from "../../Context/cart.context";

import CartItem from "./CartItem";

import { CardActions, RedButton } from "../Styles/styles";

import { handleOrderSubmit } from "../../Services/services";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div>
        {cart?.map((cartInfo, index) => (
          <CartItem key={index} cartItem={cartInfo} />
        ))}
      </div>
      <CardActions>
        {cart ? (
          <RedButton onClick={(cartInfo) => handleOrderSubmit({ cartInfo })}>
            Order Now
          </RedButton>
        ) : (
          "Cart is empty :("
        )}
      </CardActions>
    </>
  );
};

export default Cart;
