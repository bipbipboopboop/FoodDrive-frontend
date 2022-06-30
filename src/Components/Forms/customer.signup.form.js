// Render Prop

import React from "react";

import { Formik, Form, Field } from "formik";
import { RedButton } from "../Styles/styles";

import { Link, useNavigate } from "react-router-dom";
import { handleSignUp } from "../../Services/auth.services";

const SignupForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          re_password: "",
          first_name: "",
          last_name: "",
          is_vendor: false,
        }}
        onSubmit={async (values) => {
          const response = await handleSignUp({ userInfo: values });
          if (response !== 404) {
            navigate("/");
          } else {
            alert(response);
          }
        }}
      >
        {({}) => (
          <Form>
            <h3>Sign Up</h3>
            <div>
              <label htmlFor="email" id="email">
                Email :
              </label>
              <Field type="email" name="email" />
            </div>
            <div>
              <label htmlFor="text" id="username">
                Username :
              </label>
              <Field type="text" name="username" />
            </div>
            <div>
              <label htmlFor="first_name" id="first_name">
                First Name :
              </label>
              <Field type="text" name="first_name" />
              <label htmlFor="last_name" id="last_name">
                Last Name :
              </label>
              <Field type="text" name="last_name" />
            </div>

            <div>
              <label htmlFor="password" id="password">
                Password :
              </label>
              <Field type="password" name="password" />
            </div>
            <div>
              <label htmlFor="re_password" id="re_password">
                Confirm Password :
              </label>
              <Field type="password" name="re_password" />
            </div>

            <RedButton type="submit">Submit</RedButton>
          </Form>
        )}
      </Formik>
      <Link to="/vendor_sign_up">Sign up as Vendor</Link>
    </div>
  );
};

export default SignupForm;
