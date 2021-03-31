/* import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals(); */

//Example 1 (Start)
/* // STEP:1
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// reducers are pure funtions, which takes two parameters "state"(current state in store) and "action"
const reducer = function (state, action) {
  if (action.type === "INC") {
    return state + action.payload;
  }
  if (action.type === "DEC") {
    return state - action.payload;
  }
  return state; //return default
};

// STEP:2.0
// Adding middleware  (npm install redux-logger --save-dev)
const middleware = applyMiddleware(logger);

// STEP:2.1
// creating store
// const store = createStore(reducer, {});
const store = createStore(reducer, 1, middleware); // Here reducer method is called

// STEP:3 (If state changes this method will be called)
// provider with connect
// whenever the store is changed subscriber is called
store.subscribe(() => {
  console.log("data in store : ", store.getState());
});

// STEP:4 (after every below line the above reducer function will be called)
// Actions
// After "Actions", "reducer" function will be called, so after every below line the above reducer function will be called
store.dispatch({ type: "INC", payload: 1 });
store.dispatch({ type: "INC", payload: 3 });
store.dispatch({ type: "DEC", payload: 10 });
store.dispatch({ type: "Mult", payload: 5 }); */
//Example 1 (End)

// Example 2 (start)
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
//npm install redux-devtools-extension --save-dev
import { composeWithDevTools } from "redux-devtools-extension";

const useReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_NAME": {
      // Here "name" will be added to state
      return (state = { ...state, name: action.payload });
    }
    case "CHANGE_AGE": {
      // Here "age" will be added to state
      return (state = { ...state, age: action.payload });
    }
  }
  return state;
};

const tweetReducer = (state = [], action) => {
  return state;
};

// Because "store" expects only one combined reducer(like collection)
const allReducers = combineReducers({
  user: useReducer,
  tweet: tweetReducer,
});

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(logger))
);

store.subscribe(() => {
  console.log("store changed : ", store.getState());
});

// below lines will call "useReducer" function
store.dispatch({ type: "CHANGE_NAME", payload: "Shashi" });
store.dispatch({ type: "CHANGE_NAME", payload: "Shashidhar rao P" });
store.dispatch({ type: "CHANGE_AGE", payload: "26" });
// Example 2 (end)
