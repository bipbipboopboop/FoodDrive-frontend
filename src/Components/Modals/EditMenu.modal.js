import React from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { RedButton } from "../Styles/styles";
import { handleEditMenu } from "../../Services/services";
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

const CardImg = styled.img`
  height: 30vh%;
`;

const EditMenuModal = ({ menuItem, open, handleClose }) => {
  // console.log({ menuItem });
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Card>
          <div>
            <Formik
              initialValues={menuItem}
              onSubmit={(values) => handleEditMenu(values)}
            >
              {() => (
                <div className="row">
                  <CardImg src={menuItem.image_link} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      backgroundColor: "white",
                    }}
                  >
                    <Form>
                      <div>
                        <label htmlFor="title">Menu Name : </label>
                        <Field type="text" name="title" />
                      </div>
                      <div>
                        <label htmlFor="description">Description : </label>
                        <Field type="text" name="description" />
                      </div>
                      <div>
                        <label htmlFor="image_link">Image Link : </label>
                        <Field type="text" name="image_link" />
                      </div>
                      <RedButton type="submit">Save</RedButton>
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

export default EditMenuModal;
