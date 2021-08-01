import { Game } from "../constants/constants";
import { GameResult, GameState } from "../common/Interfaces";

interface Action {
  type: any;
  payload: any;
}

export const gameReducer = (
  state: GameState = {
    currentTurn: "p1",
    gameStarted: false,
    gameNumber: 0,
    gameRecords: [],
  },
  action: Action
): GameState => {
  const currentNumber = state.gameNumber;
  switch (action.type) {
    case Game.START:
      return {
        ...state,
        currentTurn: "p1",
        gameStarted: true,
        gameNumber: currentNumber + 1,
      };

    case Game.RESET:
      return {
        ...state,
        currentTurn: "p1",
        gameStarted: false,
        gameNumber: currentNumber - 1,
      };

    case Game.DRAW:
    case Game.WIN:
      let currentGameRecords = state.gameRecords;
      currentGameRecords.push(action.payload.gameResult);
      return {
        currentTurn: "p1",
        gameStarted: false,
        gameNumber: currentNumber,
        gameRecords: currentGameRecords,
      };

    case Game.CHANGE_TURN:
      let current = state.currentTurn;
      let nextTurn: "p1" | "p2" = current === "p1" ? "p2" : "p1";
      return { ...state, currentTurn: nextTurn };
  }
  return { ...state };
};
