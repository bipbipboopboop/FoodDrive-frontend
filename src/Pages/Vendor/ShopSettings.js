import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { RedButton } from "../../Components/Styles/styles";
import {
  storeMyShop,
  handleEditShop,
  storeAllMyMenu,
} from "../../Services/services";

import ShopMenuRow from "../../Components/Cards/ShopMenuRow";
import useModal from "../../Hooks/useModal";
import CreateMenuModal from "../../Components/Modals/CreateMenu.modal";
const ShopSettings = () => {
  const [myShopInfo, setMyShopInfo] = useState();
  const [menu, setMenu] = useState();
  const { open, handleOpen, handleClose } = useModal();
  useEffect(() => {
    storeMyShop(setMyShopInfo);
    storeAllMyMenu(setMenu);
  }, []);

  return (
    <div>
      <h1>Shop Settings</h1>
      {/* {myShopInfo && <pre>{JSON.stringify(myShopInfo)}</pre>}
      {menu && <pre>{JSON.stringify(menu)}</pre>} */}
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
              >
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
      <div style={{ display: "row" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 className="py-0 my-0 mx-3">Your Menu</h3>
          <RedButton onClick={() => handleOpen()}> + </RedButton>
        </div>
      </div>
      {menu && <ShopMenuRow menu={menu} />}
      <CreateMenuModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default ShopSettings;
