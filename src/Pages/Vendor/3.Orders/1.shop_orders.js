import React, { useEffect, useState } from "react";
import {
  AbstractCard,
  CardActions,
  CardContent,
  CardImg,
  RedButton,
  SVG,
} from "../../../Components/Styles/styles";
import { storeMyVendorOrders } from "../../../Services/3.vendor.services";

const ShopOrders = () => {
  const [myOrders, setMyOrders] = useState();
  useEffect(() => {
    storeMyVendorOrders({ setMyOrders });
  }, []);

  return (
    <div>
      <h3>Current Orders</h3>

      <div className="d-flex flex-column">
        {myOrders?.map((item, index) => (
          <OrderRow order={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ShopOrders;

const OrderRow = ({ order }) => {
  return (
    <div className="w-100" style={{ border: "1px solid" }}>
      {/* <pre>{JSON.stringify(order)}</pre> */}

      <p>{`Order ID : ${order?.id}`}</p>
      <p>{`Status : ${order?.order_status}`}</p>
      <p>Order Items</p>
      <div className="d-flex mw-100" display={{ overflow: "scroll" }}>
        {order?.order_items?.map((item) => (
          <OrderCard orderItem={item} />
        ))}
      </div>
    </div>
  );
};

const OrderCard = ({ orderItem }) => {
  return (
    <AbstractCard>
      {/* <pre className="w-100">{JSON.stringify(orderItem)}</pre> */}
      <div className="h-100">
        <CardContent className="h-75">
          <h5 className="w-100">{orderItem?.product?.title}</h5>
          <CardImg
            className="w-100 h-100"
            src={orderItem?.product?.image_link}
          />
          <p>{`Quantity : ${orderItem?.quantity}`}</p>
        </CardContent>
        <CardActions className="h-25 d-flex align-items-end">
          <RedButton onClick={() => console.log()}>Done</RedButton>
        </CardActions>
      </div>
    </AbstractCard>
  );
};
