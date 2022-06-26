import { Route, Routes } from "react-router-dom";
import "./App.css";

import SignupForm from "./Components/Forms/customer.signup.form";
import VendorSignupForm from "./Components/Forms/vendor.signup.form";

import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart/Cart";

import Main from "./Pages/Mainpage/Mainpage";

import VendorPage from "./Pages/Vendor/VendorPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="signup" element={<SignupForm />} />
        <Route path="vendor_sign_up" element={<VendorSignupForm />} />

        <Route path="vendor/:vendor_slug" element={<VendorPage />} />
      </Routes>
    </div>
  );
}

export default App;
