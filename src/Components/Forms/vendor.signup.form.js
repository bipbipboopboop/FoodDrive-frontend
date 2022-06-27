// Render Prop

import React from "react";

import { Formik, Form, Field } from "formik";
import { RedButton, SVG } from "../Styles/styles";
import hawker from "../../Images/hawker-pic.webp";

const VendorSignupForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirm_password: "",
          first_name: "",
          last_name: "",
          name: "",
          description: "",
          address: "",
          is_vendor: true,
        }}
        onSubmit={(values) => {
          const vendorInfo = {
            email: values.email,
            password: values.password,
            re_password: values.confirm_password,
            first_name: values.first_name,
            last_name: values.last_name,
            is_vendor: true,
          };
          const shopInfo = {
            name: values.name,
            description: values.description,
            address: values.address,
          };
          console.log({ vendorInfo, shopInfo });
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
                <div>
                  <label htmlFor="name">Shop Name</label>
                  <Field type="text" name="name" />
                </div>
                <div>
                  <label htmlFor="description">Shop description</label>
                  <Field type="text" name="description" />
                </div>
                <div>
                  <label htmlFor="text">Shop Address</label>
                  <Field type="text" name="address" />
                </div>
                {/* <pre>{JSON.stringify(values)}</pre> */}

                <RedButton type="submit">Create Account</RedButton>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default VendorSignupForm;
