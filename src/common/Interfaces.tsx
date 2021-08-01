export interface GameResult {
  status: string;
  matchNumber: number;
  player: string;
}

export interface GameState {
  currentTurn: "p1" | "p2";
  gameStarted: Boolean;
  gameNumber: number;
  gameRecords: Array<GameResult>;
}

export interface AppState {
  game: GameState;
}

export interface CellProps {
  num: number;
  updateGridStatus: (num: number, value: string) => void;
}
