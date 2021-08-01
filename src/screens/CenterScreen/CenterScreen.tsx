import React from "react";
import "./CenterScreen.css";
import Grid from "../../components/Grid/Grid";
import ActionPanel from "../../components/ActionPanel/ActionPanel";
import DisplayPanel from "../../components/DisplayPanel/DisplayPanel";

const CenterScreen = () => {
  return (
    <div className="center-screen-container">
      <h1 className="screen-header">TIC-TAC-TOE</h1>
      <DisplayPanel />
      <Grid />
      <ActionPanel />
    </div>
  );
};

export default CenterScreen;
