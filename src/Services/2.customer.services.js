import { abstractStorer } from "./services";

export const storeMyOrderHistoryList = ({ setMyOrderHistory }) => {
  abstractStorer({ setter: setMyOrderHistory, URL: "store/order_history/" });
};

export const storeMyOrderHistoryDetail = ({ setMyOrderHistory, historyID }) => {
  abstractStorer({
    setter: setMyOrderHistory,
    URL: `store/order_history/${historyID}`,
  });
};
