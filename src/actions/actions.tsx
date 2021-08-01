import { Game } from "../constants/constants";

export const gameStart = () => (dispatch: any, getState: any) => {
  dispatch({ type: Game.START });
};

export const gameReset = () => (dispatch: any, getState: any) => {
  dispatch({ type: Game.RESET });
};
