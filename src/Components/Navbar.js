import React, { useState } from "react";

import styled from "styled-components";
import cart from "../Images/Cart.svg";
import user from "../Images/User.svg";

import Login from "./Login";
import Cart from "./Cart";
import Logo from "../Images/Logo.png";

const Nav = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  background-color: black;
`;

const SVG = styled.img`
  height: 15vh;
`;

const CircleButton = styled.img`
  background: #ffffff;
  background-color: white;

  align-items: "center";
  justify-content: "center";

  width: 60px;
  height: 60px;
  padding: 10px;

  border: 0px;
  border-radius: 60px;
`;

const Navbar = () => {
  // For handling Login Modal
  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  // For handling Cart Modal
  const [openCart, setOpenCart] = useState(false);
  const handleOpenCart = () => {
    setOpenCart(true);
  };
  const handleCloseCart = () => {
    setOpenCart(false);
  };

  return (
    <Nav>
      <div>
        <SVG src={Logo} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "150px",
        }}
      >
        <CircleButton src={user} onClick={handleOpenLogin} />
        <CircleButton src={cart} onClick={handleOpenCart} />

        <Login open={openLogin} handleClose={handleCloseLogin} />
        <Cart open={openCart} handleClose={handleCloseCart} />
      </div>
    </Nav>
  );
};

export default Navbar;
