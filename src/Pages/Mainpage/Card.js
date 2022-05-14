import * as React from "react";

import styled from "styled-components";

const Card = styled.div`
  max-width: 345px;
  padding: 10px;
  margin: 20px;
  border: 2px;
`;

const CardImg = styled.img`
  height: 140px;
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
export default function MediaCard() {
  return (
    <Card>
      <CardImg
        src={
          "https://www.simplyrecipes.com/thmb/qu-AslBeskzh_HG9H0dQAmcrdLQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg"
        }
      />
      <CardContent>
        <h3>Pizza</h3>
        <p>Spicy Marinated Chicken Tomato</p>
        <p>$30.70</p>
      </CardContent>
      <CardActions>
        <Button>Select</Button>
      </CardActions>
    </Card>
  );
}
