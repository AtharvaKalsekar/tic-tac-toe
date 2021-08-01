import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../common/Interfaces";
import "./DisplayPanel.css";

const DisplayPanel = () => {
  const game = useSelector((state: AppState) => state.game);
  const { currentTurn, gameStarted } = game;

  const getMessage = () => {
    if (!gameStarted) {
      return "start the game";
    } else {
      return `Current turn ${currentTurn}`;
    }
  };

  const getStyle = () => {
    let classes = "display-panel-continer ";
    if (gameStarted && currentTurn === "p1") {
      classes += "display-panel-p1";
    } else if (gameStarted && currentTurn === "p2") {
      classes += "display-panel-p2";
    }
    return classes;
  };

  return (
    <div className={getStyle()}>
      <h3>{getMessage()}</h3>
    </div>
  );
};

export default DisplayPanel;
