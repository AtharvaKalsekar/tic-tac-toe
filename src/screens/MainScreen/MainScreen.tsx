import React from "react";
import CenterScreen from "../CenterScreen/CenterScreen";
import "./MainScreen.css";

const MainScreen = () => {
  return (
    <div className="main-container">
      <div>
        <h1>Panel-left</h1>
      </div>
      <CenterScreen />
      <div>
        <h1>Panel-right</h1>
      </div>
    </div>
  );
};

export default MainScreen;
