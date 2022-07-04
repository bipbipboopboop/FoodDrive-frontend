import React from "react";
import { SVG } from "../Styles/styles";

const CartItem = ({ cartItem }) => {
  /*
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
  }
  */
  // console.log({ cartItem });
  return (
    cartItem && (
      <div
        style={{ display: "flex", border: "1px solid", alignItems: "center" }}
      >
        <div>
          <SVG src={cartItem.image_link} />
        </div>
        <div>
          <div>{`${cartItem.title}  -   ${cartItem.quantity}`}</div>
          {/* <div>{cartItem.quantity}</div> */}
        </div>
      </div>
    )
  );
};

export default CartItem;
