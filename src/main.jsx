import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
// import App from "./App";
import PokemonApp from "./PokemonApp";
import TODOApp from "./TODOApp";
// CSS
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <TODOApp />
    </Provider>
  </React.StrictMode>
);
