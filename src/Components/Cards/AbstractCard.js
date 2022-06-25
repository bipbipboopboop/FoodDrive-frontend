import React, { useState } from "react";

import OrderModal from "../../Pages/Mainpage/OrderModal";
import useModal from "../Hooks/useModal";
import {
  AbstractCard,
  RedButton,
  CardActions,
  CardContent,
  CardImg,
} from "../Styles/styles";

export default function GeneralCard({ image, title, detail }) {
  const { open, handleOpen, handleClose } = useModal();

  return (
    <AbstractCard>
      <CardImg src={detail.image} />
      <CardContent>
        <h3>{detail.title}</h3>
        {detail.img}
      </CardContent>
      <CardActions>
        <RedButton onClick={handleOpen}>Select</RedButton>
      </CardActions>

      {/* <OrderModal
        name={name}
        description={description}
        price={price}
        image={image}
        open={open}
        handleClose={handleClose}
      /> */}
    </AbstractCard>
  );
}
