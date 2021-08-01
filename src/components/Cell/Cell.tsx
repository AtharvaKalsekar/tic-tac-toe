import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameChangeTurn } from "../../actions/actions";
import { AppState } from "../../common/Interfaces";
import "./Cell.css";

const Cell = () => {
  const dispatch = useDispatch();

  const game = useSelector((state: AppState) => state.game);
  const { currentTurn, gameStarted } = game;

  const [clicked, setClicked] = useState("");

  useEffect(() => {
    if (!gameStarted) {
      setClicked("");
    }
  }, [gameStarted]);

  const onClickCell = () => {
    dispatch(gameChangeTurn());
    setClicked(currentTurn);
  };

  const isClickable = () => {
    return gameStarted && clicked === "";
  };

  const isSelected = () => {
    return gameStarted && clicked !== "";
  };

  const getButtonStyle = () => {
    let classes = "";

    if (isSelected()) {
      classes += `${clicked}-select` + " ";
    } else if (isClickable()) {
      classes += "selectable" + " ";
    }

    return classes;
  };

  return (
    <div className="cell-container">
      <button
        onClick={onClickCell}
        className={getButtonStyle()}
        disabled={!isClickable()}
      >
        Cell
      </button>
    </div>
  );
};

export default Cell;
