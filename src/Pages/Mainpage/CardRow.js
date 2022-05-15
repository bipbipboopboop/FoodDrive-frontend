import React, { useState } from "react";
import MenuCard from "./Card";

const CardRow = () => {
  const [menus] = useState([
    {
      name: "Pizza",
      description: "Spicy Marinated Chicken Tomato",
      price: 30.7,
      image:
        "https://www.simplyrecipes.com/thmb/qu-AslBeskzh_HG9H0dQAmcrdLQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg",
    },
    {
      name: "Carbonara Pasta",
      description: "May contain Milk",
      price: 5.5,
      image:
        "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-articleLarge-v2.jpg",
    },
    {
      name: "Ice Lemon Tea",
      description: "Fresh made lemonade",
      price: 1.2,
      image:
        "https://static.toiimg.com/thumb/84339280.cms?imgsize=327880&width=800&height=800",
    },
  ]);

  const addToCart = () => {};
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
      {menus.map((menu) => (
        <MenuCard
          key={menu.name}
          name={menu.name}
          description={menu.description}
          price={menu.price}
          image={menu.image}
        />
      ))}
    </div>
  );
};

export default CardRow;
