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
// CREATING STORE
// Here name of reducer can be anything, reducer takes two parameters => 1. state, 2.action
// Reducers can be called using dispatcher
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
store.dispatch({ type: "INC", payload: 1 });  //synchronous dispatching
store.dispatch({ type: "INC", payload: 3 });
store.dispatch({ type: "DEC", payload: 10 });
store.dispatch({ type: "Mult", payload: 5 }); */
//Example 1 (End)

// **********************************************************

// Example 2 (start)
/* import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
//npm install redux-devtools-extension --save-dev
import { composeWithDevTools } from "redux-devtools-extension"; //For debug extension in chrome extensions

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
store.dispatch({ type: "CHANGE_AGE", payload: "26" }); */
// Example 2 (end)

// **********************************************************

// Example 3 (start)  //Thunk and axios to invoke REST API

/* import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk"; //npm install redux-thunk
import { composeWithDevTools } from "redux-devtools-extension"; //For debug extension in chrome extensions
import axios from "axios"; //npm install axios

// redux-thunk :
//   It is a middleware that allows you to asynchronously dipatch your actions in the 
//   reducer while data is comming from the server not blocking the page(by using loading page etc ). 

// STEP 1.0
const initialState = {
  fetching: false, // for showing ajax loader
  fetched: false, // after fetched removing above ajax loader
  users: [],
  error: null,
};

// STEP 5.0
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_START": {
      return { ...state, fetching: true };
    }
    case "RECEIVED_USERS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload,
      };
    }
    case "FETCH_USERS_ERROR": {
      return { ...state, fetching: false, error: action.payload };
    }
  }
  return state;
};

// STEP 2.0
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger)) // the order in which we give the middlewares are loaded in same order, these middlewares are called by store before invoking the reducer, because it is a middleware
);

// STEP 3.0
store.subscribe(() => {
  console.log("store state is : ", store.getState());
});

// STEP 4.0
// adding call back function dispatch so that we can asynchronously dipatch your actions with thunk
// we no need to write thunk anywhere it will intercept directly if we use call back(dispatch1) like below
store.dispatch((dispatch1) => {
  dispatch1({ type: "FETCH_USER_START" });

  // while executing above line thunk will not stop and it will execute below lines, to asynchronously apply UI
  axios
    .get("https://jsonplaceholder.typicode.com/users") //If api called successfully with 200 ok then below line "then" will be called
    .then((response) => {
      dispatch1({ type: "RECEIVED_USERS", payload: response.data });
    })
    .catch((error) => {
      dispatch1({ type: "FETCH_USERS_ERROR", payload: error });
    });
}); */

// Example 3 (end)

// **********************************************************

// Project 3 (start)
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //react and redux will be connected by Provider

import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";
import App from "./components/App";
import logger from "redux-logger";

import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// Project 3 (end)
