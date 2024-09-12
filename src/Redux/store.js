import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CommentReducer from "./slices/comment.slice"

const RootReducer = combineReducers({
    comment : CommentReducer
});


export const store = configureStore({
    reducer: RootReducer,
  });
  