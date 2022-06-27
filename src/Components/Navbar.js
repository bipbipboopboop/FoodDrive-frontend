import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import cart from "../Images/Cart.svg";
import profile from "../Images/User.svg";
import store from "../Images/Store.svg";

import Logo from "../Images/Logo.png";
import Logout from "../Images/Logout.svg";

import useModal from "../Hooks/useModal";
import { Nav, CircleButton, SVG } from "./Styles/styles";
import Signin from "./Forms/signin.form";
import CartModal from "./Modals/Cart.modal";
import { useContext } from "react";
import { UserContext } from "../Context/user.context";
import { handleSignOut } from "../Services/auth.services";

const Navbar = () => {
  const navigate = useNavigate();
  const isVendor = true;

  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
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
        {!isLoggedIn ? <CircleButton src={profile} onClick={handleOpen} /> : ""}
        {isLoggedIn ? (
          <>
            <CircleButton src={cart} onClick={handleOpenSecondary} />
            {isVendor ? (
              <CircleButton
                src={store}
                onClick={() => navigate("/create_menu")}
              />
            ) : (
              ""
            )}
            <CircleButton
              src={Logout}
              onClick={() => {
                handleSignOut(setIsLoggedIn);
                navigate("/");
              }}
            />
          </>
        ) : (
          ""
        )}

        <Signin open={open} handleClose={handleClose} />

        <CartModal open={secondaryOpen} handleClose={handleCloseSecondary} />
      </div>
    </Nav>
  );
};

export default Navbar;
