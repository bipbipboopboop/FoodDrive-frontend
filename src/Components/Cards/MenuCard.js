import React, { useState } from "react";

import styled from "styled-components";

// import OrderModal from "./OrderModal";
import OrderModal from "../Modals/Cart.modal";

const Card = styled.div`
  width: 300px;
  height: 400px;
  padding: 10px;
  margin: 20px;
  border: solid;
  border-radius: 20px;
  background-color: white;
  > * {
    background-color: white;
  }
`;

const CardImg = styled.img`
  height: 50%;
`;

const CardContent = styled.div``;

const CardActions = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  display: inline-block;
  background-color: #d30000;
  text-transform: uppercase;
  color: white;
  border-radius: 30px;
  padding-top: 16px;
  padding-right: 24px;
  padding-bottom: 16px;
  padding-left: 24px;
  font-size: 16px;
  text-align: center;
  border: 0px;
`;
export default function MenuCard({ title, description, price, image }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card>
      <CardImg src={image} />
      <CardContent>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>${price}</p>
      </CardContent>
      <CardActions>
        <Button onClick={handleOpen}>Select</Button>
      </CardActions>
      <OrderModal
        title={title}
        description={description}
        price={price}
        image={image}
        open={open}
        handleClose={handleClose}
      />
    </Card>
  );
}
