import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import { getMainpageMenu } from "../../Services/services";

import LocationRow from "./LocationRow";

import MenuRow from "./MenuRow";

const Main = () => {
  const [menu, setMenu] = useState();
  useEffect(() => {
    getMainpageMenu(setMenu);
  }, []);

  return (
    <div>
      <h1>Best Seller</h1>
      {menu && <MenuRow menu={menu} />}
      <LocationRow />
      <Footer />
    </div>
  );
};

export default Main;
