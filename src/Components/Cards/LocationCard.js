import React from "react";
import { useNavigate } from "react-router-dom";

import {
  AbstractCard,
  CardActions,
  CardContent,
  CardImg,
  RedButton,
} from "../../Components/Styles/styles";

export default function LocationCard({ locationInfo }) {
  const navigate = useNavigate();
  return (
    <AbstractCard>
      <CardImg className="w-75 h-50" src={locationInfo.image_link} />
      <div className="h-50">
        <CardContent className="h-75">
          <h3>{locationInfo.name}</h3>
          <p>{locationInfo.description}</p>
        </CardContent>
        <CardActions className="h-25 d-flex align-items-end">
          <RedButton
            onClick={() => {
              navigate(`vendor/${locationInfo.id}`);
            }}
          >
            Visit
          </RedButton>
        </CardActions>
      </div>
    </AbstractCard>
  );
}
