import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  create: true,
};

const toggleCreateGearFunc = (state, action) => ({
  ...state,
  create: action.payload,
});

export const createGearslice = createSlice({
  name: "createFieldMap",
  initialState,
  reducers: {
    toggleCreateGear: toggleCreateGearFunc,
  },
});

export const { toggleCreateGear } = createGearslice.actions;

export default createGearslice.reducer;
