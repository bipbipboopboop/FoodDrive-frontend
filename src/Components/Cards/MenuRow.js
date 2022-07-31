import React from "react";
import MenuCard from "./MenuCard";

const MenuRow = ({ menu }) => {
  return (
    <div
      style={{
        display: "flex",
        overflowX: "scroll",
      }}
    >
      {menu?.map((menuItem, index) => (
        <MenuCard key={index} menuItem={menuItem} />
      ))}
    </div>
  );
};

export default MenuRow;
