import React, { useEffect, useState } from "react";
import { getShop } from "../../Services/services";

const ShopSettings = () => {
  const [menu, setMenu] = useState();
  useEffect(() => {
    setMenu(getShop());
  }, []);

  return (
    <div>
      <div>
        <h1>Shop Settings</h1>
        <pre>{menu && menu.title}</pre>
      </div>
    </div>
  );
};

export default ShopSettings;
