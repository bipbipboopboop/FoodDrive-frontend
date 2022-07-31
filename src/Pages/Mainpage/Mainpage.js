import React, { createContext, useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import { getMainpageMenu } from "../../Services/services";

import MenuRow from "../../Components/Cards/MenuRow";
import LocationRow from "../../Components/Cards/LocationRow";

const Main = () => {
  const [menu, setMenu] = useState();
  useEffect(() => {
    getMainpageMenu(setMenu);
  }, []);

  return (
    <div>
      <h1 className="w-100 d-flex justify-content-center">Best Seller</h1>

      {menu && <MenuRow menu={menu} />}
      <LocationRow />
      <Footer />
    </div>
  );
};

export default Main;
