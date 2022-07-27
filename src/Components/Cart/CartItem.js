import React from "react";
import { SVG } from "../Styles/styles";

const CartItem = ({ cartItem }) => {
  return (
    <div className="d-flex align-items-center" style={{ border: "1px solid" }}>
      {/* <pre>{JSON.stringify({ cartItem })}</pre> */}
      <div className="w-25">
        <SVG src={cartItem?.product?.image_link} />
      </div>
      <div>
        <div>{`${cartItem?.product?.title}  -   ${cartItem?.quantity}`}</div>
      </div>
    </div>
  );
};

export default CartItem;
