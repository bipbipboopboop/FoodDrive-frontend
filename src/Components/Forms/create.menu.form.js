import React from "react";

import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";

const initialValues = {
  menu: [
    {
      title: "",
      description: "",
      unit_price: "",
      stock: "",
      shop: "",
      image: "",
    },
  ],
};

const CreateMenu = () => (
  <div>
    <h1>Create Shop</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="menu">
            {({ insert, remove, push }) => (
              <div>
                {values.menu.length > 0 &&
                  values.menu.map((menuItem, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`menu.${index}.name`}>Menu Name</label>
                        <Field
                          name={`menu.${index}.name`}
                          placeholder="Enter name of menu"
                          type="text"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`menu.${index}.description`}>
                          Menu Description
                        </label>
                        <Field
                          name={`menu.${index}.description`}
                          placeholder="Insert a description for your Menu"
                          type="text"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`menu.${index}.price`}>Price</label>
                        <Field
                          name={`menu.${index}.price`}
                          placeholder="0"
                          type="number"
                          min="0"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`menu.${index}.price`}>
                          Image Link
                        </label>
                        <Field name={`menu.${index}.text`} type="text" />
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="secondary"
                  onClick={() => push({ name: "", email: "" })}
                >
                  Add Item
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default CreateMenu;
