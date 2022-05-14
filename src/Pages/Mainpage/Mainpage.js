import React from "react";
import Navbar from "../../Components/Navbar";
import CardRow from "./CardRow";
import Options from "./MainpageNav";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Options />
      <CardRow />
    </div>
  );
};

export default Main;
