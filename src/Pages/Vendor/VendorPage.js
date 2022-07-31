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

  return (
    <>
      <div className="w-100 h-50 p-4 d-flex justify-content-between">
        <div>
          <h1>{shopInfo?.name}</h1>
          <h5>{shopInfo?.description}</h5>
          <h5>{`Location : ${shopInfo?.address}`}</h5>
        </div>
        <div className="w-50 d-flex justify-content-center">
          <img className="h-100" src={shopInfo?.image_link} />
        </div>
      </div>

      <div className="w-100 p-4">
        <h5>Reviews:</h5>
        <div className="mh-25" style={{ overflow: "scroll" }}>
          {shopInfo?.reviews.map((review) => {
            return (
              <div>
                <p>{`Anonymous Customer : ${review?.description}`}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-100 p-4" style={{ backgroundColor: "#f7f7f7" }}>
        <h5>Menu:</h5>
        <MenuRow menu={menu} />
      </div>
    </>
  );
};

export default VendorPage;
