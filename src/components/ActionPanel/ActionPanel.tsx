import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameReset, gameStart } from "../../actions/actions";
import { AppState } from "../../common/Interfaces";
import "./ActionPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faRedo } from "@fortawesome/free-solid-svg-icons";

const ActionPanel = () => {
  const dispatch = useDispatch();

  const game = useSelector((state: AppState) => state.game);
  const { gameStarted } = game;

  const onClickStartButton = () => {
    //dispatch start event
    dispatch(gameStart());
  };

  const getStartButton = () => {
    return (
      <button
        onClick={onClickStartButton}
        className="action-button action-button-start"
      >
        <FontAwesomeIcon icon={faPlay} className="icon" />
        <b>Start Game</b>
      </button>
    );
  };

  const onClickResetButton = () => {
    //dispatch reset event
    dispatch(gameReset());
  };

  const getResetButton = () => {
    return (
      <button
        onClick={onClickResetButton}
        className="action-button action-button-reset"
      >
        <FontAwesomeIcon icon={faRedo} className="icon" />
        <b>Reset Game</b>
      </button>
    );
  };

  const getActionButton = () => {
    return gameStarted ? getResetButton() : getStartButton();
  };

  return <div className="action-panel-container">{getActionButton()}</div>;
};

export default ActionPanel;
