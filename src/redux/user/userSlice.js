import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: JSON.parse(localStorage.getItem("userInfo")) || null,
};
const userSliceReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUserData1(state) {
      return null;
    },
    setProfile1(state, action) {;
      return action.payload;
    },
  },
});
export const { setProfile1, deleteUserData1 } = userSliceReducer.actions;
export default userSliceReducer.reducer;
