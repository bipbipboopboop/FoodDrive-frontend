import React, { useMemo, useState } from "react";
import { useEffect } from "react";
import { storeAllMyMenu } from "../../../Services/services";
import { RedButton } from "../../../Components/Styles/styles";
import Table from "../../../Components/Tables/Table";

const ShopProducts = () => {
  const [myMenus, setmyMenus] = useState();
  useEffect(() => {
    storeAllMyMenu(setmyMenus);
  }, []);

  const { columns, data } = useMyProducts({ myMenus });

  return (
    <div>
      <h3>Products</h3>
      <hr />
      <Table columns={columns} data={data} />
    </div>
  );
};

export default ShopProducts;

const useMyProducts = ({ myMenus }) => {
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
        Cell: (props) => (
          <>
            <RedButton onClick={() => console.log(props?.data)}>Edit</RedButton>
          </>
        ),
      },
      { accessor: "delete", Cell: (props) => <RedButton>Delete</RedButton> },
    ],
    []
  );

  const data = myMenus;
  return { columns, data };
};
