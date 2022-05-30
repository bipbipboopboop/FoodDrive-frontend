const useAuth = () => {
  return [
    JSON.parse(localStorage.getItem("user")),
    (name, email, accessToken, refreshToken) =>
      localStorage.setItem(
        "user",
        JSON.stringify({
          name,
          email,
          accessToken,
          refreshToken,
        })
      ),
  ];
};

export default useAuth;
