import React from "react";
import MediaCard from "./Card";

const CardRow = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "10px" }}>
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </div>
  );
};

export default CardRow;
