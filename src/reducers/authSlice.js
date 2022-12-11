import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  full_name: localStorage.getItem("full_name"),
  farmer_id: localStorage.getItem("farmer_id"),
  field_onboard_complete: localStorage.getItem("field_onboard_complete"),
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
    addFarmerId: (state, action) => {
      state.farmer_id = action.payload;
    },
    clearFarmerId: (state) => {
      state.farmer_id = undefined;
    },
    setFieldOnboard: (state, action) => {
      state.field_onboard_complete = action.payload;
    },
    clearFieldOnboard: (state) => {
      state.field_onboard_complete = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToken,
  addFullName,
  clearToken,
  clearFullName,
  addFarmerId,
  clearFarmerId,
  setFieldOnboard,
  clearFieldOnboard,
} = authSlice.actions;

export default authSlice.reducer;
