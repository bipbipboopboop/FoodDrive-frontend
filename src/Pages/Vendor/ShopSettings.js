import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { RedButton } from "../../Components/Styles/styles";
import { getMyShop, handleEditShop } from "../../Services/services";
const ShopSettings = () => {
  const [shopInfo, setShop] = useState();
  useEffect(() => {
    getMyShop(setShop);
  }, []);

  return (
    <div>
      <h1>Shop Settings</h1>
      {shopInfo && <pre>{JSON.stringify(shopInfo)}</pre>}
      {shopInfo && (
        <Formik
          initialValues={{
            name: shopInfo.name,
            description: shopInfo.description,
            address: shopInfo.address,
            slug: shopInfo.slug,
            image_link: shopInfo.image_link,
          }}
          onSubmit={(values) => {
            handleEditShop({ newShopInfo: values, shopID: shopInfo.id });
          }}
        >
          {() => (
            <div className="row">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
              >
                <Form>
                  <div>
                    <Field type="text" name="name" />
                  </div>
                  <div>
                    <Field type="text" name="description" />
                  </div>
                  <div>
                    <Field type="text" name="address" />
                  </div>
                  <div>
                    <Field type="text" name="image_link" />
                  </div>
                  <RedButton type="submit">Save</RedButton>
                </Form>
              </div>
            </div>
          )}
        </Formik>
      )}
    </div>
  );
};

export default ShopSettings;
