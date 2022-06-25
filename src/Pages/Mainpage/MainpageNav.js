import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  background-color: white;
  padding: 10px;
  flex: auto;
`;
const Options = () => {
  const navigate = useNavigate();
  return (
    <Nav>
      <Button onClick={() => navigate("menu_of_the_day")}>
        Menu of the day
      </Button>
      <Button onClick={() => navigate("promotion")}>Promotion</Button>
      <Button onClick={() => navigate("best_seller")}>Best Seller</Button>
      <Button onClick={() => navigate("beverages")}>Beverages</Button>
    </Nav>
  );
};

export default Options;
