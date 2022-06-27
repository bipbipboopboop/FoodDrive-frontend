import React, { useContext, useState } from "react";

import styled from "styled-components";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { RedButton } from "../Styles/styles";
import { CartContext } from "../../Context/cart.context";
import { addToCart } from "../../Services/services";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "20px",
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50vh;
  height: 70vh;
  padding: 10px;
  margin: 20px;
`;

const CardImg = styled.img`
  height: 50%;
`;

const OrderModal = ({ menuItem, open, handleClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(CartContext);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Card>
          <CardImg src={menuItem.image_link} />
          <h3>{menuItem.title}</h3>
          <p>{menuItem.description}</p>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="btn btn-primary"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                -
              </button>
            </div>
          </div>
          <p>${menuItem.unit_price * quantity}</p>

          <div
            style={{
              margin: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <RedButton
              onClick={() =>
                addToCart({ setCart, cart, itemToAdd: menuItem, quantity })
              }
            >
              Add To Cart
            </RedButton>
          </div>
        </Card>
      </Box>
    </Modal>
  );
};

export default OrderModal;
