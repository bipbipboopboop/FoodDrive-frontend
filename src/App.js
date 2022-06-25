import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Login from "./Pages/Login/Login";

import Main from "./Pages/Mainpage/Mainpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="test" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
