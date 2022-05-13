import React from "react";

import styled from "styled-components";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const SVG = styled.img`
  height: 15vh;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100vh",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const Login = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ backgroundColor: "black" }}>
            <div>
              <SVG src="https://www.canadian-pizza.com/static/media/logo.36f273f5.png" />
            </div>
            <div>
              <button>Sign Up</button>
            </div>
          </div>
          <div
            style={{
              paddingTop: "30px",
              paddingBottom: "30px",
              paddingRight: "30px",
            }}
          >
            <h1>Have an Account?</h1>
            <form>
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
                Submit
              </button>
            </form>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default Login;
