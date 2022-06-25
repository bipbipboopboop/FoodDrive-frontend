import { Route, Routes } from "react-router-dom";
import "./App.css";

import SignupForm from "./Components/Forms/customer.signup.form";
import VendorSignupForm from "./Components/Forms/vendor.signup.form";

import Navbar from "./Components/Navbar";

import Main from "./Pages/Mainpage/Mainpage";
import MenuOfTheDay from "./Pages/Vendor/MenuOfTheDay";
import VendorPage from "./Pages/Vendor/VendorPage";
import Promotion from "./Pages/Vendor/Promotion";
import BestSeller from "./Pages/Vendor/BestSeller";
import CreateShop from "./Pages/Vendor/CreateShop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="signup" element={<SignupForm />} />

        <Route path="vendor_sign_up" element={<VendorSignupForm />} />
        <Route path="vendor/:vendorID" element={<VendorPage />}>
          <Route path="menu_of_the_day" element={<MenuOfTheDay />} />
          <Route path="promotion" element={<Promotion />} />
          <Route path="best_seller" element={<BestSeller />} />
        </Route>
        <Route path="create_shop" element={<CreateShop />} />
      </Routes>
    </div>
  );
}

export default App;
