import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import CardRow from "./CardRow";
import LocationRow from "./LocationRow";
import Options from "./MainpageNav";

const Main = () => {
  const [display, setDisplay] = useState(0);
  return (
    <div>
      <Options />
      {display == 0 ? <CardRow /> : ""}
      {display == 1 ? <CardRow /> : ""}
      {display == 2 ? <CardRow /> : ""}
      {display == 3 ? <CardRow /> : ""}
      <LocationRow />
      <Footer />
    </div>
  );
};

export default Main;
