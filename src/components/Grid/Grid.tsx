import React from "react";
import Cell from "../Cell/Cell";
import "./Grid.css";

const Grid = () => {
  /**
   * 0, 1, 2
   * 3, 4, 5
   * 6, 7, 8
   */
  var matrix = new Array(9);
  matrix.fill("");

  const updateMatrix = (pos: number, value: string) => {
    matrix[pos] = value;
    console.log("Current matrix -> ", matrix);
    checkMatrixStatus();
  };

  const checkColWise = (player: string) => {
    return (
      (matrix[0] === player && matrix[3] === player && matrix[6] === player) ||
      (matrix[1] === player && matrix[4] === player && matrix[7] === player) ||
      (matrix[2] === player && matrix[5] === player && matrix[8] === player)
    );
  };

  const checkRowWise = (player: string) => {
    return (
      (matrix[0] === player && matrix[1] === player && matrix[2] === player) ||
      (matrix[3] === player && matrix[4] === player && matrix[5] === player) ||
      (matrix[6] === player && matrix[7] === player && matrix[8] === player)
    );
  };

  const checkDiagonalWise = (player: string) => {
    return (
      (matrix[0] === player && matrix[4] === player && matrix[8] === player) ||
      (matrix[2] === player && matrix[4] === player && matrix[6] === player)
    );
  };

  const hasPlayerWon = (player: string) => {
    return (
      checkRowWise(player) || checkColWise(player) || checkDiagonalWise(player)
    );
  };

  const isMatchDrawn = () => {
    let isAnyCellEmpty = matrix.indexOf("") > -1;
    return !hasPlayerWon("p1") && !hasPlayerWon("p2") && !isAnyCellEmpty;
  };

  const checkMatrixStatus = () => {
    if (hasPlayerWon("p1")) {
      //dispatch p1 win
    }

    if (hasPlayerWon("p2")) {
      //dispatch p2 win
    }

    if (isMatchDrawn()) {
      //dispatch match draw
    }
  };

  const getCells = () => {
    let arr = new Array(9);
    for (let i = 0; i < 9; i++) {
      arr[i] = (
        <div className="grid-item" key={i}>
          <Cell num={i} updateGridStatus={updateMatrix} />
        </div>
      );
    }
    return arr;
  };

  return <div className="grid-container">{getCells()}</div>;
};

export default Grid;
