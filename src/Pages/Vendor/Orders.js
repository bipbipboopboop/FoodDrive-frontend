import React, { useEffect, useState } from "react";
import {
  OrderSideBar,
  OrderSidebarTab,
} from "../../Components/Styles/orders.style";

import { storeMyOrders } from "../../Services/orders.services";

const Orders = () => {
  const [orders, setOrders] = useState();
  const [currentOrder, setCurrentOrder] = useState();
  useEffect(() => {
    storeMyOrders({ setter: setOrders });
  }, []);
  return (
    <div className="h-100 d-flex">
      <OrderSideBar className="h-100">
        {orders?.map((order, index) => (
          <OrderSidebarTab
            key={index}
            onClick={() => setCurrentOrder(orders[index])}
          >
            {`Order ${JSON.stringify(index + 1)}`}
          </OrderSidebarTab>
        ))}
      </OrderSideBar>
      <DetailedOrder currentOrder={currentOrder} />
    </div>
  );
};

export default Orders;

export const DetailedOrder = ({ currentOrder }) => {
  return (
    currentOrder && (
      <div className="w-100">
        <p>{`Order ID : ${currentOrder?.id}`}</p>
        {currentOrder?.order_items?.map((item, index) => (
          <div>
            <p>{JSON.stringify(currentOrder?.order_status)}</p>
            <p>{JSON.stringify(item?.product?.title)}</p>
            <p>{JSON.stringify(item?.quantity)}</p>
          </div>
        ))}
        {/* <p>{JSON.stringify(currentOrder)}</p> */}
      </div>
    )
  );
};
