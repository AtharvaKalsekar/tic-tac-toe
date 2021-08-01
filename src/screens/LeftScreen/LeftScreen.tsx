import React from "react";
import { useSelector } from "react-redux";
import { AppState, GameState } from "../../common/Interfaces";
import "./LeftScreen.css";
const LeftScreen = () => {
  const game: GameState = useSelector((state: AppState) => state.game);
  const { gameNumber } = game;

  return (
    <div className="left-panel-container">
      <h1 className="screen-header">Status</h1>
      <div>
        <h1>Game</h1>
        <h1>#{gameNumber}</h1>
      </div>
      <div>
        <h3>Player 1 : Green</h3>
        <h3>Player 2 : Red</h3>
      </div>
    </div>
  );
};

export default LeftScreen;
