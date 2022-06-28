import React from "react";

import styled from "styled-components";

import useModal from "../../Hooks/useModal";
import EditMenuModal from "../Modals/EditMenu.modal";

import {
  AbstractCard,
  RedButton,
  CardImg,
  CardActions,
} from "../Styles/styles";

const CardContent = styled.div``;

export default function ShopMenuCard({ menuItem }) {
  const { open, handleOpen, handleClose } = useModal();

  return (
    <AbstractCard>
      <CardImg src={menuItem.image_link} />
      <CardContent>
        <h3>{menuItem.title}</h3>
        <p>{menuItem.description}</p>
        <p>${menuItem.unit_price}</p>
      </CardContent>
      <CardActions>
        <RedButton onClick={handleOpen}>Edit</RedButton>
      </CardActions>
      {/* <OrderModal menuItem={menuItem} open={open} handleClose={handleClose} /> */}
      <EditMenuModal
        menuItem={menuItem}
        open={open}
        handleClose={handleClose}
      />
    </AbstractCard>
  );
}
