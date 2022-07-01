import React from "react";
import MenuCard from "./MenuCard";

const MenuRow = ({ menu }) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "10px",
        overflowX: "scroll",
        backgroundColor: "white",
      }}
    >
      {menu.map((menuItem) => (
        <MenuCard key={menuItem.title} menuItem={menuItem} />
      ))}
    </div>
  );
};

export default MenuRow;
