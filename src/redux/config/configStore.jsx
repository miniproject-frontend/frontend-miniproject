// import { createStore } from "redux";
// import { combineReducers } from "redux";
// import joinReducer from "../modules/joinReducer.js";

import { configureStore } from "@reduxjs/toolkit";
import joinReducer from "../modules/userSlice";
import postReducer from "../modules/postSlice";
// import getReducer from "../modules/mainSlice";

// const rootReducer = combineReducers({
//   joinReducer,
// });
const store = configureStore({
  reducer: { postReducer },
  reducer: { joinReducer: joinReducer },
});

export default store;
