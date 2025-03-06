import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./Components/Login";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import { Link } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
