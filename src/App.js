import { Route, Routes } from "react-router-dom";
import "./App.css";

import SignupForm from "./Components/Forms/customer.signup.form";
import VendorSignupForm from "./Components/Forms/vendor.signup.form";

import Navbar from "./Components/Navbar";

import Main from "./Pages/Mainpage/Mainpage";
import VendorPage from "./Pages/Vendor/VendorPage";

import ShopSettings from "./Pages/Vendor/shop_settings";

import ShopGeneralSettings from "./Pages/Vendor/1.Store/shop_settings.general";
import ShopProducts from "./Pages/Vendor/2.Products/shop.products";
import CreateShopProducts from "./Pages/Vendor/2.Products/shop.products.create";
import CustomerPastOrders from "./Pages/Customer/1.customer_order.history";
import HistoryDetail from "./Pages/Customer/3.customer_order_history.detail";
import ShopOrders from "./Pages/Vendor/3.Orders/1.shop_orders";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="h-100">
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="signup" element={<SignupForm />} />

          {/* Vendor */}
          <Route path="vendor_sign_up" element={<VendorSignupForm />} />
          <Route path="vendor/:shopID" element={<VendorPage />} />
          <Route path="my_shop" element={<ShopSettings />}>
            <Route path="general" element={<ShopGeneralSettings />} />
            <Route path="products" element={<ShopProducts />} />
            <Route path="create_products" element={<CreateShopProducts />} />
            <Route path="my_orders" element={<ShopOrders />} />
          </Route>
          {/* Vendor */}

          <Route path="order_history" element={<CustomerPastOrders />}>
            <Route path=":history_id" element={<HistoryDetail />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
