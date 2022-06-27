import api from "../Services/api";

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
      console.log({ cartItemID: cartItem.id, itemID: itemToAdd.id });
      return cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity }
        : cartItem;
    });
  } else {
    updatedCart = [...cart, { ...itemToAdd, quantity: 1 }];
  }
  console.log({ updatedCart });
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

const createVendor = async ({ vendorInfo }) => {
  const response = await api.post();
  return response;
};
const createShop = async ({ shopInfo }) => {
  const response = await api.post();
  return response;
};
const handleSubmit = ({ userInfo, shopInfo }) => {
  const userResponse = createVendor(userInfo);
  if (userResponse === 200) {
    const shopResponse = createShop(shopInfo);
  }
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
