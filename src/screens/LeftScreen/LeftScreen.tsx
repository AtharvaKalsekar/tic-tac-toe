import React from "react";
import { useSelector } from "react-redux";
import { AppState, GameState } from "../../common/Interfaces";
import "./LeftScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faTimes } from "@fortawesome/free-solid-svg-icons";

const LeftScreen = () => {
  const game: GameState = useSelector((state: AppState) => state.game);
  const { gameNumber } = game;

  return (
    <div className="left-panel-container">
      <h1 className="screen-header">Status</h1>
      <div className="game-tracker">
        <h1>Game</h1>
        <h1>#{gameNumber}</h1>
      </div>
      <div className="player-info">
        <h3>
          Player 1 : Green{" "}
          <FontAwesomeIcon icon={faCircleNotch} className="icon-info-p1" />
        </h3>
        <h3>
          Player 2 : Red{" "}
          <FontAwesomeIcon icon={faTimes} className="icon-info-p2" />
        </h3>
      </div>
    </div>
  );
};

export default LeftScreen;
