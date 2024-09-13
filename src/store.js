// src/store.js
import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./redux/user/userSlice.js";
import userReducer from "./redux/user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
