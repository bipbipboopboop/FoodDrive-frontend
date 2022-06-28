import React from "react";
import ShopMenuCard from "./ShopMenuCard";

const ShopMenuRow = ({ menu }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "10px",
        backgroundColor: "white",
      }}
    >
      {menu.map((menuItem) => (
        <ShopMenuCard key={menuItem.title} menuItem={menuItem} />
      ))}
    </div>
  );
};

export default ShopMenuRow;
