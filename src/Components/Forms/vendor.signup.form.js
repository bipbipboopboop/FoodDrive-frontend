// Render Prop

import React from "react";

import { Formik, Form, Field } from "formik";
import { RedButton, SVG } from "../Styles/styles";
import hawker from "../../Images/hawker-pic.webp";
import { handleVendorSignUp } from "../../Services/auth.services";

const VendorSignupForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          username: "",
          confirm_password: "",
          first_name: "",
          last_name: "",
          name: "",
          description: "",
          address: "",
          image_link: "",
          is_vendor: true,
        }}
        onSubmit={(values) => {
          const userInfo = {
            email: values.email,
            username: values.username,
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
            slug: "",
            image_link: values.image_link,
          };
          // console.log({ userInfo, shopInfo });
          handleVendorSignUp({ userInfo, shopInfo });
        }}
      >
        {({}) => (
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
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="email">Email : </label>
                      </td>
                      <td>
                        <Field type="email" name="email" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="username">Username : </label>
                      </td>
                      <td>
                        <Field type="text" name="username" id="username" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="first_name">First Name : </label>
                      </td>
                      <td>
                        <Field type="text" name="first_name" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="last_name">Last Name : </label>
                      </td>
                      <td>
                        <Field type="text" name="last_name" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="password">Password : </label>
                      </td>
                      <td>
                        <Field type="password" name="password" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="confirm_password">
                          Confirm Password :
                        </label>
                      </td>
                      <td>
                        <Field type="password" name="confirm_password" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="shop_name">Shop Name : </label>
                      </td>
                      <td>
                        <Field type="text" name="name" id="shop_name" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="description">Shop description : </label>
                      </td>
                      <td>
                        <Field
                          type="text"
                          name="description"
                          id="description"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="address">Shop Address :</label>
                      </td>
                      <td>
                        <Field type="text" name="address" id="address" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="image_link">Shop Image Link : </label>
                      </td>
                      <td>
                        <Field type="text" name="image_link" id="image_link" />
                      </td>
                    </tr>
                  </tbody>
                </table>

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
