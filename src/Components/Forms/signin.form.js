import React from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";

import {
  SVG,
  modalStyle,
  SecondaryButton,
} from "../../Components/Styles/styles";
import Logo from "../../Images/Logo.png";
import { Link } from "react-router-dom";
import { handleSignIn } from "../../Services/services";

const Signin = ({ open, handleClose }) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={({ data }) => {
      console.log(data);
      //const response = handleSignIn({ userInfo: data });
    }}
  >
    {({ values, handleChange }) => (
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
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
                  <SecondaryButton>Sign Up</SecondaryButton>
                </Link>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                padding: "30px",
                backgroundColor: "white",
              }}
            >
              <form>
                <h1>Have an Account?</h1>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </div>
                <SecondaryButton className="btn btn-primary" type="submit">
                  Sign In
                </SecondaryButton>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    )}
  </Formik>
);

export default Signin;
