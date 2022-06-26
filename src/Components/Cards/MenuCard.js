import React, { useState } from "react";

import styled from "styled-components";
import useModal from "../../Hooks/useModal";

// import OrderModal from "./OrderModal";
import OrderModal from "../Modals/Order.modal";
import {
  AbstractCard,
  RedButton,
  CardImg,
  CardActions,
} from "../Styles/styles";

const CardContent = styled.div``;

export default function MenuCard({ title, description, price, image }) {
  const { open, handleOpen, handleClose } = useModal();

  return (
    <AbstractCard>
      <CardImg src={image} />
      <CardContent>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>${price}</p>
      </CardContent>
      <CardActions>
        <RedButton onClick={handleOpen}>Select</RedButton>
      </CardActions>
      <OrderModal
        title={title}
        description={description}
        price={price}
        image={image}
        open={open}
        handleClose={handleClose}
      />
    </AbstractCard>
  );
}
