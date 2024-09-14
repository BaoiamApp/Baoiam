import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isFetched: false,
};

const courseSlice = createSlice({
  name: "Course",
  initialState,
  reducers: {
    addCourse(state, action) {
      state.data = action.payload;
      state.isFetched = true;
    },
    removeCourse(state) {
      state.data = [];
      state.isFetched = false;
    },
  },
});

export const { addCourse, removeCourse } = courseSlice.actions;
export default courseSlice.reducer;
