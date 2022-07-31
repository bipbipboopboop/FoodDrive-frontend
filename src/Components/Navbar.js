import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import useModal from "../Hooks/useModal";
import CartModal from "./Modals/Cart.modal";

import { handleSignOut } from "../Services/auth.services";
import { UserContext } from "../Context/user.context";

import {
  cart,
  profile,
  store,
  logo,
  logout,
  orders,
  history,
} from "../Images/images";
import { Nav, CircleButton, SVG, WhiteSubHeader } from "./Styles/styles";
import { NavbarButtonDisplays } from "./Styles/navbar.styles";

const Navbar = () => {
  const navigate = useNavigate();

  const {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    isVendor,
    openSignInModal,
  } = useContext(UserContext);

  const { open, handleOpen, handleClose } = useModal();

  const handleCartClose = async () => {
    handleClose();
  };

  const NavbarButtons = ({ isLoggedIn, isVendor }) => {
    if (!isLoggedIn) {
      return <CircleButton src={profile} onClick={openSignInModal} />;
    } else if (isVendor) {
      return (
        <>
          <CircleButton
            src={store}
            onClick={() => navigate("/my_shop/general")}
          />
          <CircleButton
            src={orders}
            onClick={() => navigate("/my_shop/my_orders")}
          />
          <CircleButton
            src={logout}
            onClick={() => {
              handleSignOut(setIsLoggedIn, setUser);
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
            src={history}
            onClick={() => navigate("/order_history")}
          />
          <CircleButton
            src={logout}
            onClick={() => {
              handleSignOut(setIsLoggedIn, setUser);
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
      {user && (
        <WhiteSubHeader>{`Welcome! ${user?.first_name}`}</WhiteSubHeader>
      )}
      <NavbarButtonDisplays>
        <NavbarButtons isLoggedIn={isLoggedIn} isVendor={isVendor} />
      </NavbarButtonDisplays>
      <CartModal open={open} handleClose={handleCartClose} />
    </Nav>
  );
};

export default Navbar;
