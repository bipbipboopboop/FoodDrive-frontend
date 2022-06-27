import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMenu } from "../../Services/services";
import MenuRow from "../../Components/Cards/MenuRow";

const VendorPage = () => {
  const params = useParams();
  const [menu, setMenu] = useState();
  useEffect(() => {
    getMenu(setMenu, params.shopID);
  }, [params.shopID]);

  return <>{menu && <MenuRow menu={menu} />}</>;
};

export default VendorPage;
