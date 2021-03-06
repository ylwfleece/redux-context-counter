import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { MyProvider } from "./MyReactRedux/MyReactRedux";

import { mycreateStore } from "./MyRedux/MyRedux";

const COUNTER_ADD = "COUNTER_ADD";
const COUNTER_SUB = "COUNTER_SUB";

export const actionType = {
  COUNTER_ADD,
  COUNTER_SUB,
};

const reducer = (state = { value: 50 }, action) => {
  switch (action.type) {
    case actionType.COUNTER_ADD:
      return {
        ...state,
        value: state.value + 1,
      };
    case actionType.COUNTER_SUB:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

const store = mycreateStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyProvider store={store}>
      <App />
    </MyProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
