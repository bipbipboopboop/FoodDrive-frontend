import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Table from "../../Components/Tables/Table";
import { storeMyOrderHistoryDetail } from "../../Services/2.customer.services";

const HistoryDetail = () => {
  const { myOrderHistory, data, columns } = useHistoryDetail();
  return (
    <div>
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
