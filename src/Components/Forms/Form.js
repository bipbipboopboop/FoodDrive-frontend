import React from "react";

import { Formik } from "formik";

const Basic = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(data) => {
      console.log(data);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />

        {errors.email && touched.email && errors.email}

        <input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />

        {errors.password && touched.password && errors.password}
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    )}
  </Formik>
);

export default Basic;
