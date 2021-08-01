import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../common/Interfaces";

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

  return (
    <div>
      <h3>{getMessage()}</h3>
    </div>
  );
};

export default DisplayPanel;
