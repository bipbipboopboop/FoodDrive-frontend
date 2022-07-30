import React, { useContext, useEffect } from "react";
import { UserContext } from "../../Context/user.context";

import styled from "styled-components";
import useModal from "../../Hooks/useModal";
import OrderModal from "../Modals/Order.modal";

import {
  AbstractCard,
  RedButton,
  CardImg,
  CardActions,
} from "../Styles/styles";

const CardContent = styled.div``;

export default function MenuCard({ menuItem }) {
  const { open, handleOpen, handleClose } = useModal();
  const { isLoggedIn, openSignInModal } = useContext(UserContext);

  const handleClick = () => {
    if (isLoggedIn) {
      handleOpen();
    } else {
      openSignInModal();
    }
  };

  return (
    <AbstractCard>
      <h5>{menuItem?.shop?.name}</h5>
      <CardImg className="w-75 h-50" src={menuItem?.image_link} />
      <div className="h-50">
        <CardContent className="h-75">
          <h3 className="h-50">{menuItem?.title}</h3>
          <p>{menuItem?.description}</p>
          <p>${menuItem?.unit_price}</p>
        </CardContent>
        <CardActions className="h-25 d-flex align-items-end">
          <RedButton className="" onClick={handleClick}>
            Select
          </RedButton>
        </CardActions>
      </div>
      <OrderModal menuItem={menuItem} open={open} handleClose={handleClose} />
    </AbstractCard>
  );
}
