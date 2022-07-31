import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./2.customer_order.siderbar";

const CustomerPastOrders = () => {
  return (
    <div className="d-flex h-100 mh-100">
      <div className="h-100 mh-100 w-25">
        <Sidebar />
      </div>
      <div className="h-100 mh-100 w-75 p-3" style={{ overflow: "scroll" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default CustomerPastOrders;
