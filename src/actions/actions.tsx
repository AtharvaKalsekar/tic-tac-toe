import { AppState, GameResult, GameState } from "../common/Interfaces";
import { Game } from "../constants/constants";

export const gameStart = () => (dispatch: any, getState: any) => {
  dispatch({ type: Game.START });
};

export const gameReset = () => (dispatch: any, getState: any) => {
  dispatch({ type: Game.RESET });
};

export const gameChangeTurn = () => (dispatch: any, getState: any) => {
  const {
    game: { gameStarted },
  } = getState();
  if (!gameStarted) {
    return;
  }
  dispatch({
    type: Game.CHANGE_TURN,
  });
};

export const gameEnd =
  (result: string, player: string) => (dispatch: any, getState: any) => {
    const {
      game: { gameNumber, gameStarted },
    }: AppState = getState();
    let res: GameResult = {
      matchNumber: gameNumber,
      player,
      status: result,
    };

    if (!gameStarted) {
      return;
    }

    dispatch({
      type: result,
      payload: {
        gameResult: res,
      },
    });
  };
