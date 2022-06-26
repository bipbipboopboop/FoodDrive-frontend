import React, { useState } from "react";

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
  /*
  menuItem : 
  {
      id: 1,
      reviews: [
        {
          product: 1,
          shop: null,
          customer: 1,
          description: "This Spaghetti is creamy",
          date: "2022-06-23",
        },
      ],
      title: "Spaghetti",
      description: "Carbonara, may contain milk",
      unit_price: 5.0,
      stock: 999,
      shop: 1,
      image: "",
  }
  */
  const { open, handleOpen, handleClose } = useModal();

  return (
    <AbstractCard>
      <CardImg src={menuItem.image} />
      <CardContent>
        <h3>{menuItem.title}</h3>
        <p>{menuItem.description}</p>
        <p>${menuItem.unit_price}</p>
      </CardContent>
      <CardActions>
        <RedButton onClick={handleOpen}>Select</RedButton>
      </CardActions>
      <OrderModal menuItem={menuItem} open={open} handleClose={handleClose} />
    </AbstractCard>
  );
}
