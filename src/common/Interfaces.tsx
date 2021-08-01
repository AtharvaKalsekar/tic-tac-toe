export interface GameState {
  currentTurn: "p1" | "p2";
  gameStarted: Boolean;
}

export interface AppState {
  game: GameState;
}

export interface CellProps {
  num: number;
}
