// src/store.js
import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./redux/user/userSlice.js";
import userReducer from "./Redux/user/userSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
