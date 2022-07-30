import React from "react";

import Sidebar from "./shop.settings.sidebar";

import { Outlet } from "react-router-dom";

const ShopSettings = () => {
  return (
    <div className="d-flex h-100 mh-100">
      <div className="h-100 mh-100 w-25">
        <Sidebar />
      </div>
      <div className="h-100 mh-100 w-75" style={{ overflow: "scroll" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default ShopSettings;
