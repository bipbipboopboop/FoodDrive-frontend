import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import Signin from "./Forms/signin.form";

import { UserContext } from "../Context/user.context";

import cart from "../Images/Cart.svg";
import profile from "../Images/User.svg";
import store from "../Images/Store.svg";
import logo from "../Images/Logo.png";
import logout from "../Images/Logout.svg";

import { Nav, CircleButton, SVG } from "./Styles/styles";

import useModal from "../Hooks/useModal";
import CartModal from "./Modals/Cart.modal";

import { handleSignOut } from "../Services/auth.services";

const Navbar = () => {
  const navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn, isVendor } = useContext(UserContext);
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
          <SVG src={logo} />
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
              src={logout}
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
