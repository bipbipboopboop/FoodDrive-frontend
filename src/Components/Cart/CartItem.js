import React, { useContext } from "react";
import { SecondaryButton, SVG } from "../Styles/styles";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { CartContext } from "../../Context/cart.context";
import { deleteCartItem, updateCartItem } from "../../Services/1.cart.services";

const CartItem = ({ cartItem }) => {
  const { setCartRefresher } = useContext(CartContext);
  const increaseQuantity = async () => {
    const newCartItem = {
      id: cartItem?.product?.id,
      quantity: cartItem?.quantity + 1,
    };
    await updateCartItem({ cartItem: newCartItem });
    setCartRefresher((prev) => prev + 1);
  };

  const decreaseQuantity = async () => {
    if (cartItem?.quantity === 1) {
      await handleDeleteCartItem();
    } else {
      const newCartItem = {
        id: cartItem?.product?.id,
        quantity: cartItem?.quantity - 1,
      };
      await updateCartItem({ cartItem: newCartItem });
    }
    setCartRefresher((prev) => prev + 1);
  };

  const handleDeleteCartItem = async () => {
    await deleteCartItem({ cartItem });
    setCartRefresher((prev) => prev + 1);
  };

  return (
    <div className="d-flex align-items-center p-2 justify-content-between">
      <div className="w-25 d-flex justify-content-center">
        <SVG className="w-75" src={cartItem?.product?.image_link} />
      </div>
      <div className="w-25 d-flex flex-column justify-content-center">
        <p className="m-0">{`${cartItem?.product?.title}`}</p>
        <p className="m-0">{`${cartItem?.product?.shop?.name}`}</p>
        <p className="m-0">{`$${
          cartItem?.product?.unit_price * cartItem?.quantity
        }`}</p>
      </div>

      <div className="w-25">
        <AiOutlinePlusCircle size={40} onClick={() => increaseQuantity()} />
        {cartItem?.quantity}
        <AiOutlineMinusCircle
          size={40}
          onClick={() => {
            decreaseQuantity();
          }}
        />
      </div>
      <SecondaryButton className="w-25" onClick={handleDeleteCartItem}>
        Delete
      </SecondaryButton>
    </div>
  );
};

export default CartItem;
