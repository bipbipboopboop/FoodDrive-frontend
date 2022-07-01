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
      {/* {<pre>{JSON.stringify(menuItem)}</pre>} */}
      <h5>{menuItem?.shop?.name}</h5>
      <CardImg src={menuItem?.image_link} />
      <CardContent>
        <h3>{menuItem?.title}</h3>
        <p>{menuItem?.description}</p>
        <p>${menuItem?.unit_price}</p>
      </CardContent>
      <CardActions>
        <RedButton onClick={handleClick}>Select</RedButton>
      </CardActions>
      <OrderModal menuItem={menuItem} open={open} handleClose={handleClose} />
    </AbstractCard>
  );
}
