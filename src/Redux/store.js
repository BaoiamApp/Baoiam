import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CommentReducer from "./slices/comment.slice";
import UserReducer from "./user/userSlice.js";
const RootReducer = combineReducers({
  comment: CommentReducer,
  user: UserReducer,
});

export const store = configureStore({
  reducer: RootReducer,
});
