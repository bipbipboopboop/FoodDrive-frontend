import React from "react";
import { SVG } from "../Styles/styles";

const CartItem = ({ cartItem }) => {
  const { image, productName, quantity } = cartItem;
  return (
    <div style={{ display: "flex", border: "1px solid" }}>
      <SVG src={image} />
      <span>
        {productName} {quantity}
      </span>
    </div>
  );
};

export default CartItem;
