// Render Prop

import React from "react";

import { Formik, Form, Field } from "formik";
import { RedButton } from "../Styles/styles";

import { Link, useNavigate } from "react-router-dom";
import { handleCustomerSignUp } from "../../Services/auth.services";

const SignupForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    const data = await handleCustomerSignUp({ userInfo: values });
    data && navigate("/");
  };
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
        onSubmit={handleSubmit}
      >
        {({}) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>Sign Up</h1>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="email" id="email">
                      Email :
                    </label>
                  </td>
                  <td>
                    <Field type="email" name="email" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="text" id="username">
                      Username :
                    </label>
                  </td>
                  <td>
                    <Field type="text" name="username" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="first_name" id="first_name">
                      First Name :
                    </label>
                  </td>
                  <td>
                    <Field type="text" name="first_name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="last_name" id="last_name">
                      Last Name :
                    </label>
                  </td>
                  <td>
                    <Field type="text" name="last_name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="password" id="password">
                      Password :
                    </label>
                  </td>
                  <td>
                    <Field type="password" name="password" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="re_password" id="re_password">
                      Confirm Password :
                    </label>
                  </td>
                  <td>
                    <Field type="password" name="re_password" />
                  </td>
                </tr>
              </tbody>
            </table>
            <RedButton type="submit">Submit</RedButton>
          </Form>
        )}
      </Formik>
      <Link to="/vendor_sign_up">Sign up as Vendor</Link>
    </div>
  );
};

export default SignupForm;
