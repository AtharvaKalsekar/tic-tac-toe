import React from "react";
import Cell from "../Cell/Cell";
import "./Grid.css";

const Grid = () => {
  const getCells = (num: number) => {
    let arr = new Array(num);
    arr.fill(
      <div className="grid-item">
        <Cell />
      </div>
    );
    return arr;
  };

  return <div className="grid-container">{getCells(9)}</div>;
};

export default Grid;
