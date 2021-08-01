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
          <div key={index} className="record">
            <h5 className="entry">Status : {rec.status}</h5>
            <h5 className="entry">Player : {rec.player}</h5>
            <h5 className="entry">Match : #{rec.matchNumber}</h5>
          </div>
        );
      });
    }
  };

  return (
    <div className="right-panel-container">
      <h1 className="screen-header">Score-Board</h1>
      <div className="record-container">{getRecordsComponent()}</div>
    </div>
  );
};

export default RightScreen;
