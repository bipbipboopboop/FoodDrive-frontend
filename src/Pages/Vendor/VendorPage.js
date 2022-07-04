import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { storeMenu, storeShopInfo } from "../../Services/services";
import MenuRow from "../../Components/Cards/MenuRow";
import { storeUserInfo } from "../../Services/auth.services";

const VendorPage = () => {
  const params = useParams();
  const [menu, setMenu] = useState();
  const [shopInfo, setShopInfo] = useState();
  useEffect(() => {
    storeMenu({ shopID: params.shopID, setMenu });
    storeShopInfo({ shopID: params.shopID, setShopInfo });
  }, [params.shopID]);

  console.log({ shopInfo });
  return (
    <>
      <div>
        <h1>{shopInfo?.name}</h1>
        <h3>{shopInfo?.description}</h3>
        <h3>{shopInfo?.address}</h3>
      </div>
      <div>
        <h3>Reviews:</h3>
        {shopInfo?.reviews.map((review) => {
          return (
            <div>
              <p>{`Anonymous Customer : ${review?.description}`}</p>
            </div>
          );
        })}
      </div>
      {menu && <MenuRow menu={menu} />}
    </>
  );
};

export default VendorPage;
