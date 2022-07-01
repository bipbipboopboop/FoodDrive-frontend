import styled from "styled-components";

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export const SVG = styled.img`
  height: 15vh;
`;

// Button
//________________________________________________
export const SecondaryButton = styled.button`
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

export const CircleButton = styled.img`
  background: #ffffff;
  background-color: white;

  align-items: "center";
  justify-content: "center";

  width: 60px;
  height: 60px;
  padding: 10px;

  border: 0px;
  border-radius: 60px;
`;
//________________________________________________

export const Nav = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  background-color: black;
`;

// Card
// ________________________________
export const AbstractCard = styled.div`
  width: 300px;
  height: 400px;
  max-width: 300px;
  max-height: 400px;
  min-width: 300px;
  min-height: 400px;
  padding: 10px;
  margin: 20px;
  border: solid;
  border-radius: 20px;
  background-color: white;
  > * {
    background-color: white;
  }
`;

export const CardImg = styled.img`
  height: 50%;
  max-height: 20vh;
  max-width: 30vh;
`;

export const CardContent = styled.div``;

export const CardActions = styled.div`
  display: flex;
  justify-content: center;
`;

export const RedButton = styled.button`
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
// ________________________________

export const RowWrap = styled.div`
  display: flex;
  justify-content: space-around;
  background: black;
  flex-wrap: wrap;
`;

//____________________________________
export const WhiteSubHeader = styled.h4`
  color: white;
  margin: 0px;
  padding: 0px;
`;
//____________________________________
