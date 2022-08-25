import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'react-redux'
import { Provider } from "react-redux";
import App from "./App";

import usersReducer from "./features/users/usersSlice";

const store = createStore(
  usersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
