import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMenu } from "../../Services/services";
import MenuRow from "../../Components/Cards/MenuRow";
import Options from "../Mainpage/MainpageNav";

const VendorPage = () => {
  const params = useParams();
  const [menu, setMenu] = useState();
  useEffect(() => {
    getMenu(setMenu, params.vendor_slug);
  }, []);

  return (
    <>
      {/* <Options /> */}
      {/* <Outlet /> */}
      {/* <pre>{params.vendor_slug}</pre> */}
      {menu && <MenuRow menu={menu} />}
    </>
  );
};

export default VendorPage;
