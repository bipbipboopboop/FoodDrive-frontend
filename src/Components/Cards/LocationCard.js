import React from "react";
import { useNavigate } from "react-router-dom";

import {
  AbstractCard,
  CardActions,
  CardImg,
  RedButton,
} from "../../Components/Styles/styles";

export default function LocationCard({ name, description, image, vendorSlug }) {
  const navigate = useNavigate();
  return (
    <AbstractCard>
      <CardImg src={image} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <CardActions>
        <RedButton onClick={() => navigate(`vendor/${vendorSlug}`)}>
          Visit
        </RedButton>
      </CardActions>
    </AbstractCard>
  );
}
