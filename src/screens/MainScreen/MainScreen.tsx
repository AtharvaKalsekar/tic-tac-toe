import React from "react";
import CenterScreen from "../CenterScreen/CenterScreen";
import LeftScreen from "../LeftScreen/LeftScreen";
import RightScreen from "../RightScreen/RightScreen";
import "./MainScreen.css";

const MainScreen = () => {
  return (
    <div className="main-container">
      <LeftScreen />
      <CenterScreen />
      <RightScreen />
    </div>
  );
};

export default MainScreen;
