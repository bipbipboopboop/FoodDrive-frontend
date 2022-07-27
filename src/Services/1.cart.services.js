import api from "./api";

export const storeMyCart = async ({ setter }) => {
  const url = "store/carts/my_cart";
  const response = await api.get(url);
  const cart_items = response?.data?.cart_items;
  /*
  {
    "id":"1257a8e0-6fcc-40a6-bdfb-e86420822b00",
    "customer":{"id":3,"name":"Customer 1"},
    "is_checkout":false,
    "cart_items":[
      {
        "id":20,
        "product":{
          "id":1,"title":"Aglio Alio Spaghetti","unit_price":5.0
        },
        "quantity":1
      }]
    }
  */
  setter(cart_items);
};

export const updateCartItem = async ({ cartItem }) => {
  const updateCartItemURL = "store/carts/my_cart/cart_items/";
  const data = { product_id: cartItem?.id, quantity: cartItem?.quantity };
  console.log({ data });
  await api.post(updateCartItemURL, data);
};

export const updateMyCart = async ({ cartItems }) => {
  console.log({ cartItems });
  if (cartItems) {
    for (const cartItem of cartItems) {
      await updateCartItem({ cartItem });
    }
  }
};

export const createOrder = async () => {
  const url = "store/orders/";
  await api.post(url, {});
};
