import produce from "immer";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Table from "../../Components/Tables/Table";
import { storeMyOrderHistoryDetail } from "../../Services/2.customer.services";

const HistoryDetail = () => {
  const { myOrderHistory, data, columns } = useHistoryDetail();
  return (
    <div>
      {/* <pre>{JSON.stringify(myOrderHistory)}</pre>
      <pre>{JSON.stringify(data)}</pre> */}
      <Table data={data} columns={columns} />
    </div>
  );
};

export default HistoryDetail;

const useHistoryDetail = () => {
  const { history_id } = useParams();
  const [myOrderHistory, setMyOrderHistory] = useState();

  const columns = useMemo(
    () => [
      //   {
      //     Header: "Image",
      //     accessor: "image_link",
      //     Cell: (props) => <img className="w-100 h-100 p-3" src={props?.value} />,
      //     width: "15vh",
      //     height: "15vh",
      //   },
      { Header: "Title", accessor: "product.title" },
      {
        Header: "Unit Price",
        accessor: "product.unit_price",
        Cell: (props) => `$${props?.value}`,
      },
      {
        Header: "Quantity",
        accessor: "quantity",
      },
      {
        Header: "Total Price",
        accessor: (props) => `$${props?.product?.unit_price * props?.quantity}`,
      },
    ],
    []
  );

  const data = myOrderHistory?.ordered_items?.map((item) => ({
    product: item?.order_item.product,
    quantity: item?.order_item.quantity,
    shop: item?.shop,
  }));

  useEffect(() => {
    storeMyOrderHistoryDetail({ setMyOrderHistory, historyID: history_id });
  }, [history_id]);

  return { history_id, myOrderHistory, data, columns };
};
