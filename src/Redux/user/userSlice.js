import { createSlice } from "@reduxjs/toolkit";
// prabhjot
const initialState = {
  profile: JSON.parse(localStorage.getItem("userInfo")) || null,
};
const userSliceReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUserData1(state) {
      state.profile = null;
    },
    setProfile1(state, action) {
      state.profile = action.payload;
    },
  },
});
export const { setProfile1, deleteUserData1 } = userSliceReducer.actions;
export default userSliceReducer.reducer;
