import React, { useContext, useEffect, useState } from "react";
import {
  AbstractCard,
  CardContent,
  CardImg,
  RedButton,
} from "../../../Components/Styles/styles";
import { VendorContext } from "../../../Context/vendor.context";

import {
  setDone,
  storeMyVendorOrders,
} from "../../../Services/3.vendor.services";

const ShopOrders = () => {
  const [myOrders, setMyOrders] = useState();
  const { refresher } = useContext(VendorContext);

  useEffect(() => {
    storeMyVendorOrders({ setMyOrders });
  }, [refresher]);

  return (
    <>
      <h3>Current Orders</h3>

      <div className="d-flex flex-column">
        {myOrders?.map((item, index) => (
          <OrderRow order={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default ShopOrders;

const OrderRow = ({ order }) => {
  const { setRefresher } = useContext(VendorContext);
  return (
    <div className="w-100 px-5" style={{ border: "5px solid" }}>
      <div className="d-flex justify-content-between py-3">
        <div>
          <p>{`Order ID : ${order?.id}`}</p>
          <p>{`Status : ${order?.order_status}`}</p>
          <p>Order Items :</p>
        </div>
        <div>
          <RedButton
            onClick={async () => {
              await setDone({ order });
              setRefresher((prev) => prev + 1);
            }}
          >
            Done
          </RedButton>
        </div>
      </div>
      <div className="d-flex mw-100" display={{ overflow: "scroll" }}>
        {order?.order_items?.map((item, index) => (
          <OrderCard key={index} orderItem={item} />
        ))}
      </div>
    </div>
  );
};

const OrderCard = ({ orderItem }) => {
  return (
    <AbstractCard className="mx-0 mt-0">
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
      </div>
    </AbstractCard>
  );
};
