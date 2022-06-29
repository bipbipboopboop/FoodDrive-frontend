import api from "../Services/api";
import { slugify } from "./helper.function";

export const storeAuth = (responseData) => {
  localStorage.setItem(
    "auth",
    JSON.stringify({
      access: responseData.access,
      refresh: responseData.refresh,
    })
  );
};

export const getAuth = () => {
  return JSON.parse(localStorage.getItem("auth"));
};

export const getAccessToken = () => {
  return getAuth()?.access;
};

export const getUserInfo = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const getUserID = () => {
  const userInfo = getUserInfo();
  return userInfo.id;
};

export const storeUserInfo = async () => {
  const url = "/auth/users/me";
  const response = await api.get(url);
  const userData = response.data;
  localStorage.setItem("user", JSON.stringify(userData));
};

export const handleSignUp = async ({ userInfo }) => {
  const url = "/auth/users/";
  console.log({ userInfo });
  if (userInfo.password === userInfo.re_password) {
    try {
      const createdResponse = await api.post(url, JSON.stringify(userInfo));
      alert("Sign up successful!");
      return createdResponse.data;
    } catch (error) {
      alert(error);
      return 404;
    }
  } else {
    alert("Passwords do not match!");
  }
};

export const handleCustomerSignUp = async ({ userInfo }) => {
  const url = "/store/customers/";
  try {
    // Create a User first
    const userData = await handleSignUp({ userInfo });
    // Then map this User to the Customer Model
  } catch (error) {
    alert(error);
  }
};

export const handleVendorSignUp = async ({ userInfo, shopInfo }) => {
  console.log({ userInfo, shopInfo });
  const url = "/store/owners/";
  try {
    // Create a User first
    const userData = await handleSignUp({ userInfo });
    // Then Create Shop
    const shopData = await createShop({ shopInfo });
    if (userData !== 404 && shopData !== 404) {
      // Map User to the Owner model, and link the user to the newly created shop
      // Link this user to the shop
      await api.post(url, {
        user: userData.id,
        shop: shopData.id,
      });
    }
  } catch (error) {
    alert(error);
  }
};

export const handleSignIn = async ({ loginInfo }) => {
  const url = "/auth/jwt/create";

  try {
    const loginResponse = await api.post(url, JSON.stringify(loginInfo));
    const tokens = loginResponse.data;
    storeAuth(tokens);
    await storeUserInfo();
    return tokens;
  } catch (error) {
    alert(error);
    return 404;
  }
};
export const handleSignOut = (setIsLoggedIn) => {
  localStorage.clear();
  setIsLoggedIn(false);
};

// Owner
// _____________________________________________________________________________
export const getOwnerInfo = async () => {
  const url = "/store/owners/me";
  try {
    const ownerResponse = await api.get(url);
    const ownerInfo = ownerResponse.data;
    return ownerInfo;
  } catch (error) {
    console.log({ error });
    return 404;
  }
};

const createShop = async ({ shopInfo }) => {
  const url = "/store/shops/";
  const shopInfoWithSlug = { ...shopInfo, slug: slugify(shopInfo.name) };
  try {
    const shopCreatedResponse = await api.post(url, shopInfoWithSlug);
    return shopCreatedResponse.data;
  } catch (error) {
    console.log(error);
    return 404;
  }
  //   {
  //     "name": "",
  //     "description": "",
  //     "address": "",
  //     "slug": "",
  //     "image_link": ""
  // }
};
