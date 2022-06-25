import React, { useState } from "react";

import cart from "../Images/Cart.svg";
import user from "../Images/User.svg";

import Login from "../Pages/Login/Login";
import Cart from "./Cart";
import Logo from "../Images/Logo.png";
import { Link } from "react-router-dom";

import useModal from "./Hooks/useModal";
import { Nav, CircleButton, SVG } from "./Styles/styles";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("user") !== null;

  const {
    open,
    handleOpen,
    handleClose,
    secondaryOpen,
    handleOpenSecondary,
    handleCloseSecondary,
  } = useModal();
  return (
    <Nav>
      <div>
        <Link to="/">
          <SVG src={Logo} />
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "150px",
        }}
      >
        <CircleButton src={user} onClick={handleOpen} />
        <CircleButton src={cart} onClick={handleOpenSecondary} />

        <Login open={open} handleClose={handleClose} />
        {isLoggedIn && (
          <Cart open={secondaryOpen} handleClose={handleCloseSecondary} />
        )}
      </div>
    </Nav>
  );
};

export default Navbar;
