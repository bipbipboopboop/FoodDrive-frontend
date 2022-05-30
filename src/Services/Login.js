import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "./apiURL";
import useAuth from "./Authentication";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  console.log({ email, password });
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
          console.log(res);
          const accessToken = res.access;
          const refreshToken = res.refresh;
          setAuth({ user: { accessToken, refreshToken } });
          //   navigate("/");
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
