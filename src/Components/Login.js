import React from "react";

import styled from "styled-components";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import useLogin from "../Services/Login";

const SVG = styled.img`
  height: 15vh;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const Button = styled.button`
  display: inline-block;
  background-color: #d30000;
  text-transform: uppercase;
  color: white;
  border-radius: 30px;
  padding-top: 16px;
  padding-right: 24px;
  padding-bottom: 16px;
  padding-left: 24px;
  font-size: 16px;
  text-align: center;
  border: 0px;
`;

const Login = ({ open, handleClose }) => {
  const { useEmail, usePassword, handleSubmit } = useLogin(handleClose);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "black",
            }}
          >
            <div>
              <SVG src={Logo} />
            </div>
            <div>
              <Link
                to="/signup"
                style={{ textDecoration: "none" }}
                onClick={handleClose}
              >
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "30px",
            }}
          >
            <form>
              <h1>Have an Account?</h1>
              <div class="mb-3">
                <label htmlFor="email" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  value={useEmail[0]}
                  onChange={(e) => useEmail[1](e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label htmlFor="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  value={usePassword[0]}
                  onChange={(e) => usePassword[1](e.target.value)}
                />
              </div>
              <button class="btn btn-primary" onClick={handleSubmit}>
                Sign In
              </button>
            </form>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default Login;
