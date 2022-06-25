import React, { useState } from "react";

import cart from "../Images/Cart.svg";
import user from "../Images/User.svg";
import store from "../Images/Store.svg";

import Login from "../Pages/Login/Login";
import Cart from "./Cart";
import Logo from "../Images/Logo.png";
import Logout from "../Images/Logout.svg";

import { Link, useNavigate } from "react-router-dom";

import useModal from "./Hooks/useModal";
import { Nav, CircleButton, SVG } from "./Styles/styles";

const Navbar = () => {
  // const isLoggedIn = localStorage.getItem("user") !== null;
  const isLoggedIn = true;
  const navigate = useNavigate();

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
          width: "300px",
        }}
      >
        <CircleButton src={user} onClick={handleOpen} />
        {isLoggedIn ? (
          <>
            <CircleButton src={cart} onClick={handleOpenSecondary} />
            <CircleButton
              src={store}
              onClick={() => navigate("/create_shop")}
            />
            <CircleButton
              src={Logout}
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            />
          </>
        ) : (
          ""
        )}

        <Login open={open} handleClose={handleClose} />
        {isLoggedIn && (
          <Cart open={secondaryOpen} handleClose={handleCloseSecondary} />
        )}
      </div>
    </Nav>
  );
};

export default Navbar;
