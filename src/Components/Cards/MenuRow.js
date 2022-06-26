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
      {menu.map((item) => (
        <MenuCard
          key={item.title}
          title={item.title}
          description={item.description}
          price={item.unit_price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default MenuRow;
