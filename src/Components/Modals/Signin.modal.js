import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form, Field } from "formik";

import { SVG, modalStyle, SecondaryButton, RedButton } from "../Styles/styles";
import Logo from "../../Images/Logo.png";

import { getUserInfo, handleSignIn } from "../../Services/auth.services";
import { UserContext } from "../../Context/user.context";

const Signin = ({ open, handleClose }) => {
  const navigate = useNavigate();
  const { setUser, setIsLoggedIn } = useContext(UserContext);

  const handleSubmit = async (values) => {
    const response = await handleSignIn({ loginInfo: values });
    if (response === 404) {
      alert("Wrong email or password");
    } else {
      setIsLoggedIn(true);
      const userInfo = getUserInfo();
      await setUser(userInfo);
      if (userInfo.is_vendor) {
        navigate("/my_shop/my_orders");
      } else {
        navigate("/");
      }
      handleClose();
    }
  };

  return (
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
              <SecondaryButton
                onClick={() => {
                  navigate("/signup");
                  handleClose();
                }}
              >
                Sign Up
              </SecondaryButton>
            </div>
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form
                style={{
                  display: "flex",
                  backgroundColor: "white",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  height: "40vh",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                }}
              >
                <div>
                  <h3>Have an Account?</h3>

                  <div>
                    <label htmlFor="email" id="email">
                      Email :
                    </label>
                  </div>
                  <div>
                    <Field type="email" name="email" required />
                  </div>
                  <div>
                    <label htmlFor="password" id="password">
                      Password :
                    </label>
                  </div>
                  <div>
                    <Field type="password" name="password" required />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <RedButton type="submit">Sign In</RedButton>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Box>
    </Modal>
  );
};

export default Signin;
