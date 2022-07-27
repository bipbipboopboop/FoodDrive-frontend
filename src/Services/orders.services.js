import api from "./api";
export const storeMyOrders = async ({ setter }) => {
  const myOrderURL = "store/shops/my_shop/orders";
  const response = await api.get(myOrderURL);
  const data = response?.data;
  setter(data);
};
