import React from "react";
import { useNavigate } from "react-router-dom";

import {
  AbstractCard,
  CardActions,
  CardImg,
  RedButton,
} from "../../Components/Styles/styles";

export default function LocationCard({ locationInfo }) {
  const navigate = useNavigate();
  return (
    <AbstractCard>
      <CardImg src={locationInfo.image_link} />
      <div>
        <h3>{locationInfo.name}</h3>
        <p>{locationInfo.description}</p>
        <pre>{JSON.stringify(locationInfo.id)}</pre>
      </div>
      <CardActions>
        <RedButton
          onClick={() => {
            navigate(`vendor/${locationInfo.id}`);
          }}
        >
          Visit
        </RedButton>
      </CardActions>
    </AbstractCard>
  );
}
