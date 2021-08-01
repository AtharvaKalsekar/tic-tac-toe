import { createStore, combineReducers, applyMiddleware } from "redux";
import { AppState } from "../common/Interfaces";
import { gameReducer } from "../reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducer = combineReducers({
  game: gameReducer,
});

const initialState: AppState = {
  game: {
    currentTurn: "p1",
    gameStarted: false,
    gameNumber: 0,
  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
