import React from "react";
import { useSelector } from "react-redux";
import { AppState, GameResult, GameState } from "../../common/Interfaces";
import "./RightScreen.css";

const RightScreen = () => {
  const game: GameState = useSelector((state: AppState) => state.game);
  const { gameRecords } = game;

  const getRecordsComponent = () => {
    if (gameRecords.length == 0) {
      return <h3>No records yet!!</h3>;
    } else {
      return gameRecords.map((rec: GameResult, index: number) => {
        return (
          <div key={index}>
            <h5>Status : {rec.status}</h5>
            <h5>Player : {rec.player}</h5>
            <h5>Match : #{rec.matchNumber}</h5>
          </div>
        );
      });
    }
  };

  return (
    <div className="right-panel-container">
      <h1 className="screen-header">Score-Board</h1>
      {getRecordsComponent()}
    </div>
  );
};

export default RightScreen;
