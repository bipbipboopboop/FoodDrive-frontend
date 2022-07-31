import produce from "immer";
import api from "./api";

export const storeMyVendorOrders = async ({ setMyOrders }) => {
  const URL = "store/shops/my_shop/orders";
  const response = await api.get(URL);

  setMyOrders(response?.data);
};
