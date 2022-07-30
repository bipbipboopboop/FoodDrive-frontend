import { Route, Routes } from "react-router-dom";
import "./App.css";

import SignupForm from "./Components/Forms/customer.signup.form";
import VendorSignupForm from "./Components/Forms/vendor.signup.form";

import Navbar from "./Components/Navbar";

import Main from "./Pages/Mainpage/Mainpage";
import VendorPage from "./Pages/Vendor/VendorPage";

import ShopSettings from "./Pages/Vendor/shop_settings";
import Orders from "./Pages/Vendor/Orders";
import ShopGeneralSettings from "./Pages/Vendor/1.Store/shop_settings.general";
import ShopProducts from "./Pages/Vendor/2.Products/shop.products";
import CreateShopProducts from "./Pages/Vendor/2.Products/shop.products.create";

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
            <Route path="my_orders" element={<Orders />} />
          </Route>
          {/* Vendor */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
