import React from "react";
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
  return (
    <Nav>
      <Button>Menu of the day</Button>
      <Button>Promotion</Button>
      <Button>Best Seller</Button>
      <Button>Beverages</Button>
    </Nav>
  );
};

export default Options;
