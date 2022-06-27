import api from "../Services/api";

// Auth
// ______________________________________________________________________
export const setAuth = async (responseData) => {
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

export const getUserInfo = async (access) => {
  const url = "";
  const response = await api.get(url);
};

export const handleSignIn = async ({ userInfo }) => {
  const url = "/auth/jwt/create";

  try {
    const responseData = await api.post(url, JSON.stringify(userInfo));
    return responseData.data;
  } catch (error) {
    console.log({ error });
    return 404;
  }
};
export const handleSignOut = (setIsLoggedIn) => {
  localStorage.clear();
  setIsLoggedIn(false);
};
