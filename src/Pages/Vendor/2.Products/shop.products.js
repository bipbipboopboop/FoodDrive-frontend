import React, { useState } from "react";
import { useEffect } from "react";
import { storeAllMyMenu } from "../../../Services/services";

const ShopProducts = () => {
  const [myMenus, setmyMenus] = useState();
  useEffect(() => {
    storeAllMyMenu(setmyMenus);
  }, []);

  return (
    <div>
      <h3>Products</h3>
      <hr />
      {myMenus?.map((menuItem) => (
        <Product menuItem={menuItem} />
      ))}
    </div>
  );
};

export default ShopProducts;

const Product = ({ menuItem }) => {
  return <pre>{JSON.stringify(menuItem)}</pre>;
};
