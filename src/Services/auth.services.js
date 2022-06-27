import api from "../Services/api";

// Auth
// ______________________________________________________________________
export const setAuth = (responseData) => {
  console.log({ 3: localStorage.getItem("auth") });
  localStorage.setItem(
    "auth",
    JSON.stringify({
      access: responseData.access,
      refresh: responseData.refresh,
    })
  );
  console.log({ 4: localStorage.getItem("auth") });
};

export const getAuth = () => {
  return JSON.parse(localStorage.getItem("auth"));
};

export const getAccessToken = () => {
  return getAuth()?.access;
};

export const getUserInfo = async () => {
  const url = "/auth/users/me";
  console.log({ 6: localStorage.getItem("user") });
  const response = await api.get(url);
  console.log({ 7: response });
  const userData = response.data;
  console.log({ 8: userData });
  localStorage.setItem("user", JSON.stringify(userData));
};

export const handleSignIn = async ({ loginInfo }) => {
  const url = "/auth/jwt/create";

  try {
    const response = await api.post(url, JSON.stringify(loginInfo));
    console.log({ 1: response });
    const tokens = response.data;
    console.log({ 2: tokens });
    setAuth(tokens);
    console.log({ 5: "here" });
    await getUserInfo(tokens.access);
    console.log({ 9: localStorage.getItem("user") });
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
