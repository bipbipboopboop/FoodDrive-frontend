import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpAPI } from "./apiURL";

const useSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      //   console.log({ email, name, password, re_password: confirmPassword });
      fetch(signUpAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          re_password: confirmPassword,
        }),
      })
        .then((res) => (res.status === 200 ? res.json() : "Fail")) //This code is toxic and would be changed
        .then((res) => {
          if (res !== "Fail") {
            navigate("/");
            alert("Success, log in to start ordering!");
          } else {
            alert(res);
          }
        });
    } else {
      alert("Passwords do not match!");
    }
  };

  return {
    useName: [name, setName],
    useEmail: [email, setEmail],
    usePassword: [password, setPassword],
    useConfirmPassword: [confirmPassword, setConfirmPassword],
    handleSubmit,
    navigate,
  };
};

export default useSignUp;
