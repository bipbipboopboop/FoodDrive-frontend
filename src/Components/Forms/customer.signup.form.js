// Render Prop

import React from "react";

import { Formik, Form, Field } from "formik";
import { RedButton } from "../Styles/styles";
import { signUpAPI } from "../../Services/apiURL";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          re_password: "",
          first_name: "",
          last_name: "",
          is_vendor: false,
        }}
        onSubmit={(values) => {
          if (values.password === values.re_password) {
            fetch(signUpAPI, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
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
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <h3>Sign Up</h3>
            <div>
              <label htmlFor="email">Email : </label>
              <Field type="email" name="email" />
            </div>
            <div>
              <label htmlFor="first_name">First Name : </label>
              <Field type="text" name="first_name" />
              <label htmlFor="last_name">Last Name : </label>
              <Field type="text" name="last_name" />
            </div>
            <div></div>
            <div>
              <label htmlFor="password">Password : </label>
              <Field type="password" name="password" />
            </div>
            <div>
              <label htmlFor="re_password">Confirm Password : </label>
              <Field type="password" name="re_password" />
            </div>
            <pre>{JSON.stringify(values)}</pre>
            <RedButton type="submit">Submit</RedButton>
          </Form>
        )}
      </Formik>
      <Link to="/vendor_sign_up">Sign up as Vendor</Link>
    </div>
  );
};

export default SignupForm;
