import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import useModal from "../Hooks/useModal";
import CartModal from "./Modals/Cart.modal";

import { handleSignOut } from "../Services/auth.services";

import { UserContext } from "../Context/user.context";

import cart from "../Images/Cart.svg";
import profile from "../Images/User.svg";
import store from "../Images/Store.svg";
import logo from "../Images/Logo.png";
import logout from "../Images/Logout.svg";
import { Nav, CircleButton, SVG } from "./Styles/styles";
import { NavbarButtons } from "./Styles/navbar.styles";

const Navbar = () => {
  const navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn, isVendor, openSignInModal } =
    useContext(UserContext);
  const { open, handleOpen, handleClose } = useModal();

  return (
    <Nav>
      <div>
        <Link to="/">
          <SVG src={logo} />
        </Link>
      </div>
      <NavbarButtons>
        {!isLoggedIn ? (
          <CircleButton src={profile} onClick={openSignInModal} />
        ) : (
          ""
        )}
        {isLoggedIn ? (
          <>
            <CircleButton src={cart} onClick={handleOpen} />
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
        <CartModal open={open} handleClose={handleClose} />
      </NavbarButtons>
    </Nav>
  );
};

export default Navbar;
