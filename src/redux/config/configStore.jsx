// import { createStore } from "redux";
// import { combineReducers } from "redux";
// import joinReducer from "../modules/joinReducer.js";

import { configureStore } from "@reduxjs/toolkit";
import joinReducer from "../modules/joinSlice";

// const rootReducer = combineReducers({
//   joinReducer,
// });
const store = configureStore({
  reducer: { joinReducer: joinReducer },
});

export default store;
