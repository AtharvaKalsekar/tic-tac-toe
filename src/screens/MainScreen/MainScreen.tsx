import React from "react";
import CenterScreen from "../CenterScreen/CenterScreen";
import LeftScreen from "../LeftScreen/LeftScreen";
import "./MainScreen.css";

const MainScreen = () => {
  return (
    <div className="main-container">
      <LeftScreen />
      <CenterScreen />
      <div>
        <h1>Panel-right</h1>
      </div>
    </div>
  );
};

export default MainScreen;
