import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: undefined,
  full_name: undefined,
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
  },
});

// Action creators are generated for each case reducer function
export const { addToken, addFullName, clearToken } = authSlice.actions;

export default authSlice.reducer;
