import React, { useContext } from "react";
import { CartContext } from "../../Context/cart.context";

import CartItem from "./CartItem";

import { RedButton } from "../Styles/styles";

import { handleOrderSubmit } from "../../Services/services";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {console.log({ cart })}
      <div>
        {cart &&
          cart.map((cartInfo, index) => (
            <CartItem key={index} cartItem={cartInfo} />
          ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          padding: "10px",
        }}
      >
        <RedButton
          onClick={(event) => handleOrderSubmit({ cartInfo: cart, event })}
        >
          Order Now
        </RedButton>
      </div>
    </div>
  );
};

export default Cart;
