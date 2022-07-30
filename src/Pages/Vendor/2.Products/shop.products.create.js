import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { createMenu, storeMyShop } from "../../../Services/services";
import {
  AbstractCard,
  CardActions,
  CardContent,
  CardImg,
  RedButton,
} from "../../../Components/Styles/styles";

const CreateShopProducts = () => {
  const [myStore, setmyStore] = useState();
  useEffect(() => {
    storeMyShop(setmyStore);
  }, []);

  return (
    <div>
      <h3>Create a new product</h3>
      <hr />
      <Formik
        initialValues={{
          title: "",
          description: "",
          unit_price: 0,
          stock: 999,
          slug: "",
          image_link: "",
        }}
        onSubmit={(values) => createMenu({ menuInfo: values })}
      >
        {({ values }) => {
          const menuItem = {
            shop: {
              name: myStore?.name,
            },
            title: values?.title,
            description: values?.description,
            image_link: values?.image_link,
            unit_price: values?.unit_price,
          };
          return (
            <div className="row">
              <div className="col">
                <Form>
                  {/* <pre>{JSON.stringify(myStore)}</pre> */}
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <label htmlFor="title">Menu Name :</label>
                        </td>
                        <td>
                          <Field type="text" name="title" id="title" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="description">
                            Menu Description :
                          </label>
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
                          <label htmlFor="image_link">Image Link : </label>
                        </td>
                        <td>
                          <Field
                            type="text"
                            name="image_link"
                            id="image_link"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="unit_price">Unit Price : </label>
                        </td>
                        <td>
                          <Field
                            type="text"
                            name="unit_price"
                            id="unit_price"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <RedButton type="submit">Create</RedButton>
                </Form>
              </div>
              <div className="col">
                <ExampleMenu className="m-0 p-0" menuItem={menuItem} />
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateShopProducts;

const ExampleMenu = ({ menuItem }) => {
  return (
    <AbstractCard className="p-0 m-0">
      <h5>{menuItem?.shop?.name}</h5>
      <CardImg className="w-75 h-50" src={menuItem?.image_link} />
      <div className="h-50">
        <CardContent className="h-75">
          <h3 className="h-50">{menuItem?.title}</h3>
          <p>{menuItem?.description}</p>
          <p>${menuItem?.unit_price}</p>
        </CardContent>
        <CardActions className="h-25 d-flex align-items-end">
          <RedButton>Select</RedButton>
        </CardActions>
      </div>
    </AbstractCard>
  );
};
