// src/store.js
import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./redux/user/userSlice.js";
import userReducer from "./Redux/user/userSlice";
import courseReducer from "./redux/slices/courseSlice";
import recommendedCourseReducer from "./redux/slices/recommendedCourseSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer,
    recommendedCourse: recommendedCourseReducer,
  },
});

export default store;
