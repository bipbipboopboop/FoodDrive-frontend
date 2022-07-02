import produce from "immer";
import api from "../Services/api";
import { slugify } from "./helper.function";

export const handleOrderSubmit = ({ cartInfo, event }) => {
  console.log({ cartInfo });
};

export const addToCart = ({ setCart, cart, itemToAdd, quantity }) => {
  console.log({ cart, itemToAdd, quantity });

  if (!cart) {
    setCart([{ ...itemToAdd, quantity }]);
  } else {
    for (var idx = 0; idx < cart.length; idx++) {
      const cartItem = cart[idx];
      if (cartItem.id === itemToAdd.id) {
        const newCart = produce(cart, (draft) => {
          draft[idx].quantity += quantity;
        });
        setCart(newCart);
        console.log({ newCart });
        break;
      }
      const newCart = produce(cart, (draft) => {
        draft.push({ ...itemToAdd, quantity });
      });
      setCart(newCart);
    }
  }

  // const existingCartItem = cart?.find(
  //   (cartItem) => cartItem.id === itemToAdd.id
  // );

  // var updatedCart = cart;
  // if (existingCartItem) {
  //   updatedCart.map((cartItem) => {
  //     return cartItem.id === itemToAdd.id
  //       ? { ...cartItem, quantity }
  //       : cartItem;
  //   });
  // } else {
  //   updatedCart = [...cart, { ...itemToAdd, quantity: 1 }];
  // }
  // setCart(updatedCart);
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
    alert(error);
  }
};

// Owner Specific

export const getMyStore = async () => {
  const url = "store/owners/me/";
  const getOwnerResponse = await api.get(url);
  const ownerInfo = getOwnerResponse.data;
  console.log({ ownerInfo });
  const storeInfo = ownerInfo.shop;
  //console.log({ ownerInfo, storeInfo });
  return storeInfo;
};

export const storeMyShop = async (setShopInfo) => {
  const url = "store/owners/me/";
  const getOwnerResponse = await api.get(url);
  const ownerInfo = getOwnerResponse.data;
  const storeInfo = ownerInfo.shop;
  setShopInfo(storeInfo);
};

export const storeAllMyMenu = async (setMenu) => {
  const myStore = await getMyStore();
  const myStoreID = myStore.id;
  console.log({ myStore });
  const url = `store/shops/${myStoreID}/products`;
  try {
    const response = await api.get(url);
    const myProducts = response.data;
    setMenu(myProducts);
  } catch (error) {
    alert(error);
    return 404;
  }
};

export const handleEditShop = async ({ newShopInfo, shopID }) => {
  const url = `store/shops/${shopID}/`;
  try {
    const response = await api.put(url, newShopInfo);
    console.log({ response });
  } catch (error) {
    alert(error);
    return 404;
  }
};

export const handleEditMenu = async (values) => {
  const newMenu = {
    ...values,
    title: values.title,
    description: values.description,
    image_link: values.image_link,
  };
  const productID = newMenu.id;
  const url = `store/products/${productID}/`;
  await api.put(url, newMenu);
};

export const createMenu = async (menuInfo) => {
  const myStore = await getMyStore();
  const storeID = myStore.id;
  console.log({ storeID });
  const payload = { ...menuInfo, shop: storeID, slug: slugify(menuInfo.title) };

  const url = "store/products/";
  try {
    const response = await api.post(url, payload);
    alert(JSON.stringify(response.data));
  } catch (error) {
    alert(error);
  }
};
