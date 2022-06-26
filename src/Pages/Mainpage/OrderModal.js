import React, { useState } from "react";

import styled from "styled-components";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const SVG = styled.img`
  height: 15vh;
`;

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

const Button = styled.button`
  display: inline-block;
  background-color: #d30000;
  text-transform: uppercase;
  color: white;
  border-radius: 30px;
  padding-top: 16px;
  padding-right: 24px;
  padding-bottom: 16px;
  padding-left: 24px;
  font-size: 16px;
  text-align: center;
  border: 0px;
`;

const OrderModal = ({
  title,
  description,
  price,
  image,
  open,
  handleClose,
}) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Card>
          <CardImg src={image} />
          <h3>{title}</h3>
          <p>{description}</p>
          <div style={{ display: "flex", justifyContent: "" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                classtitle="btn btn-primary"
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
                classtitle="btn btn-primary"
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
          <p>${price * quantity}</p>

          <div
            style={{
              margin: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button>Add To Cart</Button>
          </div>
        </Card>
      </Box>
    </Modal>
  );
};

export default OrderModal;
