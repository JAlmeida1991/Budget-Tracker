import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./containers/App";

import * as serviceWorker from "./serviceWorker";
import rootReducer from "./store/reducer/reducer";
import { loadStateFromStorage, saveStateToStorage } from "./util/localStorage";

const persistedState = loadStateFromStorage();

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// subscribe will fire everytime a user triggers an action creator
store.subscribe(() => {
  saveStateToStorage(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
