import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  full_name: localStorage.getItem("full_name"),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    addFullName: (state, action) => {
      state.full_name = action.payload;
    },
    clearToken: (state) => {
      state.token = undefined;
    },
    clearFullName: (state) => {
      state.full_name = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToken, addFullName, clearToken, clearFullName } =
  authSlice.actions;

export default authSlice.reducer;
