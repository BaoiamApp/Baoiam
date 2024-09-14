import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    data: [{ plans: [] }],
    isFetched: false,
  },
];
const recommendedCourseSlice = createSlice({
  name: "recommended",
  initialState,
  reducers: {
    addRecommendedCourse(state, action) {
      if (Array.isArray(action.payload)) {
        console.log("inside reducer:", action.payload);
        state.data = action.payload;
        // state.data?.push(action.payload);
        state.isFetched = true;
      } else {
        console.error("Payload is not an array:", action.payload);
      }
    },
    removeRecommendedCourse() {
      state.data = [];
      state.isFetched = false;
    },
  },
});

export const { addRecommendedCourse, removeRecommendedCourse } =
  recommendedCourseSlice.actions;
export default recommendedCourseSlice.reducer;
