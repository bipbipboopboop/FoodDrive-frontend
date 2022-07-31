import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";

import { Formik, Form, Field } from "formik";
import { RedButton } from "../../../Components/Styles/styles";

import {
  storeMyShop,
  handleEditShop,
  storeAllMyMenu,
} from "../../../Services/services";

import { Link } from "react-router-dom";

const ShopGeneralSettings = () => {
  const [myShopInfo, setMyShopInfo] = useState();
  const [menu, setMenu] = useState();

  useEffect(() => {
    storeMyShop(setMyShopInfo);
    storeAllMyMenu(setMenu);
  }, []);

  const frontendURL = process.env.REACT_APP_FRONT_END_URL;
  const myStoreURL = `vendor/${myShopInfo?.id}`;

  return (
    <div>
      <h3>Shop Settings</h3>
      {/* <pre>{JSON.stringify(myShopInfo)}</pre> */}
      <hr />
      <div>
        <h5>Site Information</h5>
        <p>Store URL</p>

        <Link to={`/${myStoreURL}`} replace>
          <p>{frontendURL + myStoreURL}</p>
        </Link>
        <QRCode value={frontendURL + myStoreURL} style={{ marginRight: 50 }} />
      </div>
      <hr />
      <div>
        <h5>Store Details</h5>
        {myShopInfo && (
          <Formik
            initialValues={{
              name: myShopInfo.name,
              description: myShopInfo.description,
              address: myShopInfo.address,
              slug: myShopInfo.slug,
              image_link: myShopInfo.image_link,
            }}
            onSubmit={(values) => {
              handleEditShop({ newShopInfo: values, shopID: myShopInfo.id });
            }}
          >
            {() => (
              <div className="row">
                <div>
                  <Form>
                    <div>
                      <label htmlFor="name">Shop Name :</label>
                      <Field type="text" name="name" id="name" />
                    </div>
                    <div>
                      <label htmlFor="description">Shop Description :</label>
                      <Field type="text" name="description" id="description" />
                    </div>
                    <div>
                      <label htmlFor="address">Address : </label>
                      <Field type="text" name="address" id="address" />
                    </div>
                    <div>
                      <label htmlFor="image_link">Image Link : </label>
                      <Field type="text" name="image_link" id="image_link" />
                    </div>
                    <RedButton type="submit">Save</RedButton>
                  </Form>
                </div>
              </div>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default ShopGeneralSettings;
