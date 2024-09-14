// src/store.js
import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./redux/user/userSlice.js";
import userReducer from "./redux/user/userSlice";
import courseReducer from "./redux/course/courseSlice";
import recommendedCourseReducer from "./redux/recommendedCourse/recommendedCourseSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer,
    recommendedCourse: recommendedCourseReducer,
  },
});

export default store;
