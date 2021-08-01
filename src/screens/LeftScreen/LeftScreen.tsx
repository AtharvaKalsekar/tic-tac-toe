import React from "react";
import { useSelector } from "react-redux";
import { AppState, GameState } from "../../common/Interfaces";

const LeftScreen = () => {
  const game: GameState = useSelector((state: AppState) => state.game);
  const { gameNumber } = game;

  return (
    <div>
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
