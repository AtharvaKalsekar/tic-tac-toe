import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameChangeTurn } from "../../actions/actions";
import { AppState, CellProps } from "../../common/Interfaces";
import "./Cell.css";

const Cell = (props: CellProps) => {
  const dispatch = useDispatch();

  const game = useSelector((state: AppState) => state.game);
  const { currentTurn, gameStarted } = game;

  const [clicked, setClicked] = useState("");

  useEffect(() => {
    if (!gameStarted) {
      props.updateGridStatus(props.num, "");
      setClicked("");
    }
  }, [props, gameStarted]);

  const onClickCell = () => {
    props.updateGridStatus(props.num, currentTurn);
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
