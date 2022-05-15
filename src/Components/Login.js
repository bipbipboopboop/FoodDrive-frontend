import React from "react";

import styled from "styled-components";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Logo from "../Images/Logo.png";

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
              <Button>Sign Up</Button>
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
                <label for="email" class="form-label">
                  Email address
                </label>
                <input type="email" class="form-control" id="email" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input type="password" class="form-control" id="password" />
              </div>
              <button type="submit" class="btn btn-primary">
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
