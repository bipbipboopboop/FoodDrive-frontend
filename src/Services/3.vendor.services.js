import api from "./api";
import { abstractStorer } from "./services";

export const storeMyVendorOrders = async ({ setMyOrders }) => {
  const URL = "store/shops/my_shop/orders";
  const response = await api.get(URL);
  setMyOrders(response?.data);
};

export const setDone = async ({ order }) => {
  const URL = `store/shops/my_shop/orders/${order?.id}/`;
  await api.put(URL, { order_status: "COMPLETE" });
};

export const storeMyCompletedOrders = async ({ setMyOrders }) => {
  const URL = "store/orders/my_past_orders/";
  abstractStorer({ setter: setMyOrders, URL });
};
