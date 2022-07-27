import React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Cart from "../Cart/Cart";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "70vh",
  width: "50vh",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const CartModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Cart />
      </Box>
    </Modal>
  );
};

export default CartModal;
