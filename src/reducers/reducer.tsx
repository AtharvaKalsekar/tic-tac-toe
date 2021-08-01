import { Game } from "../constants/constants";
import { GameState } from "../common/Interfaces";

interface Action {
  type: any;
  payload: any;
}

export const gameReducer = (
  state: GameState = { currentTurn: "p1", gameStarted: false },
  action: Action
): GameState => {
  switch (action.type) {
    case Game.START:
      return { ...state, currentTurn: "p1", gameStarted: true };
    case Game.RESET:
      return { currentTurn: "p1", gameStarted: false };
  }
  return { ...state };
};
