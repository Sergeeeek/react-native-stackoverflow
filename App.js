import React from "react";
import devTools from "remote-redux-devtools";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux"
import App from "./src/App";
import reducers from "./src/reducers";

const enhancer = compose(
  applyMiddleware(thunk),
  devTools({
    name: "stackoverflow-task",
    realtime: true,
  }),
);

const store = createStore(reducers, enhancer);

export default app = () => (
  <Provider store={store}>
    <App />
  </Provider>
);