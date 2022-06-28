import api from "../Services/api";

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

export const handleSignIn = async ({ loginInfo }) => {
  const url = "/auth/jwt/create";

  try {
    const loginResponse = await api.post(url, JSON.stringify(loginInfo));
    const tokens = loginResponse.data;
    storeAuth(tokens);
    await storeUserInfo();
    return tokens;
  } catch (error) {
    console.log({ error });
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
