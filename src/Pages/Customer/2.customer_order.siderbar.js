import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { storeMyOrderHistoryList } from "../../Services/2.customer.services";

const Background = styled.div`
  background-color: #faf9f4;
  position: fixed;
  maxheight: 100vh;
  overflow: scroll;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.25);
`;

const Sidebar = () => {
  const [myOrderHistory, setMyOrderHistory] = useState();
  useEffect(() => {
    storeMyOrderHistoryList({ setMyOrderHistory });
  }, []);

  return (
    <Background className="w-25 h-100">
      <div className="p-3">
        <h5>Current Orders</h5>
        {myOrderHistory?.map(
          (order, index) =>
            order?.order_status === "Pending" && (
              <Order order={order} key={index} />
            )
        )}
      </div>
      <div className="p-3">
        <h5>History</h5>
        {myOrderHistory?.map(
          (order, index) =>
            order?.order_status === "Completed" && (
              <Order order={order} key={index} />
            )
        )}
      </div>
    </Background>
  );
};

export default Sidebar;

const Order = ({ order }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-100 p-3 my-2"
      style={{ border: "1px solid" }}
      onClick={() => navigate(`${order?.id}`)}
    >
      <pre>{`Order ID : ${order?.id}`}</pre>
    </div>
  );
};
