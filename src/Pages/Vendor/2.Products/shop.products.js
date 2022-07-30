import React, { useMemo, useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import {
  deleteMyProduct,
  storeAllMyMenu,
  updateMyProduct,
} from "../../../Services/services";
import { modalStyle, RedButton } from "../../../Components/Styles/styles";
import Table from "../../../Components/Tables/Table";
import useModal from "../../../Hooks/useModal";
import { Formik } from "formik";

const ShopProducts = () => {
  const [myMenus, setmyMenus] = useState();
  const [refresher, setRefresher] = useState(0);
  useEffect(() => {
    storeAllMyMenu(setmyMenus);
  }, [refresher]);

  const { columns, data } = useMyProducts({ myMenus, setRefresher });

  return (
    <div>
      <h3>Products</h3>
      <hr />
      <Table columns={columns} data={data} />
    </div>
  );
};

export default ShopProducts;

const useMyProducts = ({ myMenus, setRefresher }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Image",
        accessor: "image_link",
        Cell: (props) => <img className="w-100 h-100 p-3" src={props?.value} />,
        width: "15vh",
        height: "15vh",
      },
      { Header: "Title", accessor: "title" },
      { Header: "Description", accessor: "description" },
      {
        Header: "Price",
        accessor: "unit_price",
        Cell: (props) => `$${props?.value}`,
      },
      {
        accessor: "edit",
        Cell: ({ cell }) => {
          const modalProps = useModal();
          return (
            <>
              <RedButton
                onClick={() => {
                  modalProps?.handleOpenWithProps({
                    data: cell?.row?.original,
                  });
                  setRefresher((prev) => prev + 1);
                }}
              >
                Edit
              </RedButton>
              <EditModal modalProps={modalProps} />
            </>
          );
        },
      },
      {
        accessor: "delete",
        Cell: ({ cell }) => (
          <RedButton
            onClick={async () => {
              await deleteMyProduct({ menuItem: cell?.row?.original });
              setRefresher((prev) => prev + 1);
            }}
          >
            Delete
          </RedButton>
        ),
      },
    ],
    []
  );

  const data = myMenus;
  return { columns, data };
};

const EditModal = ({ modalProps }) => {
  const data = modalProps?.data;
  return (
    <Modal open={modalProps?.open} onClose={modalProps?.handleClose}>
      <Box sx={modalStyle}>
        <Formik
          initialValues={{
            id: data?.id,

            description: data?.description,
            image_link: data?.image_link,
            reviews: data?.reviews,
            slug: data?.slug,
            stock: data?.stock,
            title: data?.title,
            unit_price: data?.unit_price,
          }}
          onSubmit={async (values) => {
            await updateMyProduct({ menuInfo: values });
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <>
              <form onSubmit={handleSubmit}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label>Title</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          name="title"
                          onChange={handleChange}
                          value={values.title}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Description</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          name="description"
                          onChange={handleChange}
                          value={values.description}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Price</label>
                      </td>
                      <td>
                        <input
                          type="number"
                          name="unit_price"
                          min={0}
                          onChange={handleChange}
                          value={values.unit_price}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Image Link</label>
                      </td>
                      <td>
                        <input
                          type="text"
                          name="image_link"
                          onChange={handleChange}
                          value={values.image_link}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>

                <button type="submit">Submit</button>
              </form>
            </>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};
