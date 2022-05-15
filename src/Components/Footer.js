import React from "react";
import styled from "styled-components";

const FooterBorder = styled.div`
  background-color: #d30000;
  height: 10vh;
`;

const FooterDiv = styled.div`
  height: 50vh;
  background-color: black;
  color: white;
`;
const Footer = () => {
  return (
    <FooterDiv>
      <FooterBorder />
      Made by Cheng Deren & Ethan Chen
    </FooterDiv>
  );
};

export default Footer;
