import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUserData(state) {
      state.profile = null;
    },
    setProfile(state, action) {
      state.profile = action.payload;
    },
  },
});
export const { setProfile, deleteUserData } = userSlice.actions;
export default userSlice.reducer;
