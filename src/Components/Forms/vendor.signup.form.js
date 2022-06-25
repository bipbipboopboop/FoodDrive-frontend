// Render Prop

import React from "react";

import { Formik, Form, Field } from "formik";
import { RedButton, SVG } from "../Styles/styles";
import hawker from "../../Images/hawker-pic.webp";

const VendorSignupForm = () => (
  <div>
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirm_password: "",
        first_name: "",
        last_name: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values }) => (
        <div style={{ display: "flex" }}>
          <SVG style={{ height: "85vh", width: "90vh" }} src={hawker} />
          <div
            style={{
              height: "85vh",
              width: "120vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
                <label htmlFor="confirm_password">Confirm Password : </label>
                <Field type="password" name="confirm_password" />
              </div>

              <pre>{JSON.stringify(values)}</pre>

              <RedButton type="submit">Submit</RedButton>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  </div>
);

export default VendorSignupForm;
