import React, { createContext, useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import { getMainpageMenu } from "../../Services/services";

import MenuRow from "../../Components/Cards/MenuRow";
import LocationRow from "../../Components/Cards/LocationRow";
import { UserContext } from "../../Context/user.context";

const Main = () => {
  const [menu, setMenu] = useState();
  useEffect(() => {
    getMainpageMenu(setMenu);
  }, []);

  const { user } = createContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>Best Seller</h1>
      {user && <h3>{user}</h3>}
      {menu && <MenuRow menu={menu} />}
      <LocationRow />
      <Footer />
    </div>
  );
};

export default Main;
