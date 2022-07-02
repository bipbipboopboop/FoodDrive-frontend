import React, { useContext } from "react";
import { CartContext } from "../../Context/cart.context";

import CartItem from "./CartItem";

import { CardActions, RedButton } from "../Styles/styles";

import { handleOrderSubmit } from "../../Services/services";

const Cart = () => {
  const { cart } = useContext(CartContext);
  // console.log({ cart });

  return (
    <>
      <div>
        {cart?.map((cartInfo, index) => (
          <CartItem key={index} cartItem={cartInfo} />
        ))}
      </div>
      <CardActions>
        {cart ? (
          <RedButton
            onClick={(event) => handleOrderSubmit({ cartInfo: cart, event })}
          >
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
