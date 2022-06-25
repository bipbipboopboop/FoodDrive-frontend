import { useState } from "react";
import { loginAPI } from "./apiURL";
import useAuth from "./Authentication";

const useLogin = (handleClose) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [auth, setAuth] = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(loginAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => (res.status === 200 ? res.json() : "Fail")) //This code is toxic and would be changed
      .then((res) => {
        if (res !== "Fail") {
          const accessToken = res.access;
          const refreshToken = res.refresh;
          setAuth({ user: { accessToken, refreshToken } });
          setEmail("");
          setPassword("");
          handleClose();
        } else {
          alert(res);
        }
      });
  };

  return {
    useEmail: [email, setEmail],
    usePassword: [password, setPassword],
    handleSubmit,
  };
};

export default useLogin;
