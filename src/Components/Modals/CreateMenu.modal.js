import React from "react";
import { Formik, Form, Field } from "formik";

import styled from "styled-components";

import { createMenu } from "../../Services/services";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { RedButton } from "../Styles/styles";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "20px",
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50vh;
  height: 70vh;
  padding: 10px;
  margin: 20px;
`;

const CreateMenuModal = ({ open, handleClose }) => {
  // console.log({ menuItem });
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Card>
          <div>
            <Formik
              initialValues={{
                // id: 4,
                description: "",
                image_link: "",
                reviews: [],
                shop: 2,
                slug: "",
                stock: 999,
                title: "",
                unit_price: 0,
              }}
              onSubmit={(values) => createMenu(values)}
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
                        <label htmlFor="title">Menu Name :</label>
                        <Field type="text" name="title" id="title" />
                      </div>
                      <div>
                        <label htmlFor="description">Menu Description :</label>
                        <Field
                          type="text"
                          name="description"
                          id="description"
                        />
                      </div>
                      <div>
                        <label htmlFor="image_link">Image Link : </label>
                        <Field type="text" name="image_link" id="image_link" />
                      </div>
                      <div>
                        <label htmlFor="unit_price">Unit Price : </label>
                        <Field type="text" name="unit_price" id="unit_price" />
                      </div>
                      <RedButton type="submit">Create</RedButton>
                    </Form>
                  </div>
                </div>
              )}
            </Formik>
          </div>
        </Card>
      </Box>
    </Modal>
  );
};

export default CreateMenuModal;
