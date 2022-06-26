import React from "react";
import MenuCard from "./MenuCard";

const MenuRow = ({ menu }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "10px",
        backgroundColor: "white",
        margin: "0px",
      }}
    >
      {menu.map((menuItem) => (
        <MenuCard key={menuItem.id} menuItem={menuItem} />
      ))}
    </div>
  );
};

export default MenuRow;
