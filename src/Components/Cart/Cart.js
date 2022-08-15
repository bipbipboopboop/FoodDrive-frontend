import React, { useContext } from "react";
import { CartContext } from "../../Context/cart.context";

import CartItem from "./CartItem";

import { CardActions, RedButton } from "../Styles/styles";
import { createPayment } from "../../Services/1.cart.services";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, setCartRefresher } = useContext(CartContext);

  const handleOrderSubmit = async () => {
    const url = await createPayment();
    console.log({ url });

    if (url) {
      window.location.replace(url);
    }
  };

  return (
    <div className="h-100 d-flex flex-column">
      <h3 className="d-flex justify-content-center">Your Cart</h3>
      {/* <pre>{JSON.stringify({ cartItems })}</pre> */}
      <div className="h-75" style={{ overflow: "scroll" }}>
        {cartItems?.map((cartInfo, index) => (
          <CartItem key={index} cartItem={cartInfo} />
        ))}
      </div>
      <CardActions className="fixed-bottom py-3">
        <RedButton onClick={handleOrderSubmit}>Order Now</RedButton>
      </CardActions>
    </div>
  );
};

export default Cart;
