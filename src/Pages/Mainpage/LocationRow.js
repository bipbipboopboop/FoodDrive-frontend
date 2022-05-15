import React from "react";
import styled from "styled-components";
import LocationCard from "./LocationCard";

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  background: black;
`;
const LocationRow = () => {
  return (
    <Row>
      <LocationCard image="https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/deck.jpg" />
      <LocationCard image="https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/deck.jpg" />
      <LocationCard image="https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/deck.jpg" />
      <LocationCard image="https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/deck.jpg" />
    </Row>
  );
};

export default LocationRow;
