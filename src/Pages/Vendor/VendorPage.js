import React from "react";
import { Outlet, useParams } from "react-router-dom";
import CardRow from "../Mainpage/CardRow";
import Options from "../Mainpage/MainpageNav";

const VendorPage = () => {
  const params = useParams();
  return (
    <>
      <Options />
      {/* <CardRow /> */}
      <Outlet />
      <pre>{params.vendorID}</pre>
    </>
  );
};

export default VendorPage;
