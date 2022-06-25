import React from "react";
import { RowWrap } from "../Styles/styles";
import GeneralCard from "./AbstractCard";

/*
cardDetails : 
[
  {
    ...
  },
  {
    ...
  },
  {
    ...
  }
]
*/

const CardRow = ({ cardDetails }) => {
  return (
    <RowWrap>
      {cardDetails.map((detail, index) => (
        <GeneralCard index={index} detail={detail} />
      ))}
    </RowWrap>
  );
};

export default CardRow;
