import React from "react";
import "./App.css";
import MainScreen from "./screens/MainScreen/MainScreen";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainScreen />
      </div>
    </Provider>
  );
}

export default App;
