import React from "react";

import styled from "styled-components";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SpanningTable from "./Table";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
};

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

const Cart = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <SpanningTable />
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            padding: "10px",
          }}
        >
          <Button>Checkout</Button>
        </div>
      </Box>
    </Modal>
  );
};

export default Cart;
