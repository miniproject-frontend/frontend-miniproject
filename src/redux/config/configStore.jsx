import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../modules/postSlice";

const store = configureStore({
  reducer: { postReducer },
});

export default store;
