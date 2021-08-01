import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameReset, gameStart } from "../../actions/actions";
import { AppState } from "../../common/Interfaces";

const ActionPanel = () => {
  const dispatch = useDispatch();

  const game = useSelector((state: AppState) => state.game);
  const { gameStarted } = game;

  //   useEffect(() => {}, [gameStarted]);

  const onClickStartButton = () => {
    //dispatch start event
    dispatch(gameStart());
  };

  const getStartButton = () => {
    return <button onClick={onClickStartButton}>Start Game</button>;
  };

  const onClickResetButton = () => {
    //dispatch reset event
    dispatch(gameReset());
  };

  const getResetButton = () => {
    return <button onClick={onClickResetButton}>Reset Game</button>;
  };

  const getActionButton = () => {
    return gameStarted ? getResetButton() : getStartButton();
  };

  return <div>{getActionButton()}</div>;
};

export default ActionPanel;
