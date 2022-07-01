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
import { Nav, CircleButton, SVG, WhiteSubHeader } from "./Styles/styles";
import { NavbarButtonDisplays } from "./Styles/navbar.styles";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, isLoggedIn, setIsLoggedIn, isVendor, openSignInModal } =
    useContext(UserContext);
  const { open, handleOpen, handleClose } = useModal();

  const NavbarButtons = ({ isLoggedIn, isVendor }) => {
    if (!isLoggedIn) {
      return <CircleButton src={profile} onClick={openSignInModal} />;
    } else if (isVendor) {
      return (
        <>
          <CircleButton src={cart} onClick={handleOpen} />
          <CircleButton src={store} onClick={() => navigate("/create_menu")} />
          <CircleButton
            src={logout}
            onClick={() => {
              handleSignOut(setIsLoggedIn);
              navigate("/");
            }}
          />
        </>
      );
    } else {
      return (
        <>
          <CircleButton src={cart} onClick={handleOpen} />
          <CircleButton
            src={logout}
            onClick={() => {
              handleSignOut(setIsLoggedIn);
              navigate("/");
            }}
          />
        </>
      );
    }
  };

  return (
    <Nav>
      <div>
        <Link to="/">
          <SVG src={logo} />
        </Link>
      </div>
      <WhiteSubHeader>{`Welcome! ${user?.first_name}`}</WhiteSubHeader>
      <NavbarButtonDisplays>
        <NavbarButtons isLoggedIn={isLoggedIn} isVendor={isVendor} />
      </NavbarButtonDisplays>
      <CartModal open={open} handleClose={handleClose} />
    </Nav>
  );
};

export default Navbar;
