import api from "../Services/api";
import { getUserInfo } from "./auth.services";

export const handleOrderSubmit = ({ cartInfo, event }) => {
  console.log({ cartInfo });
};

export const addToCart = ({ setCart, cart, itemToAdd, quantity }) => {
  console.log({ cart, itemToAdd, quantity });

  const existingCartItem = cart.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  var updatedCart = cart;
  if (existingCartItem) {
    updatedCart.map((cartItem) => {
      return cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity }
        : cartItem;
    });
  } else {
    updatedCart = [...cart, { ...itemToAdd, quantity: 1 }];
  }
  setCart(updatedCart);
};

export const getReccLocation = async (setLocationList) => {
  const url = "store/shops/";
  const response = await api.get(url);

  setLocationList(response.data);
};

export const getMainpageMenu = async (setMenu) => {
  const url = "store/products/";
  const response = await api.get(url);

  setMenu(response.data);
};

export const getMenu = async (setMenu, shopID) => {
  const url = `store/shops/${shopID}/products`;
  const response = await api.get(url);
  setMenu(response.data);
};

export const handleVisit = async ({ shopID }) => {
  const url = `store/shops/${shopID}`;
  try {
    const response = await api.get(url);
    console.log({ shopMenu: response.data });
  } catch (error) {
    console.log({ error });
  }
};

export const getShop = async () => {
  const url = "store/owners/me/";
  const getOwnerResponse = await api.get(url);
  const ownerInfo = getOwnerResponse.data;
  const storeInfo = ownerInfo.shop;
  console.log(storeInfo);
  return storeInfo;
};
