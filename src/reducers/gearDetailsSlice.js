import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  model: "",
  manufacture: "",
  nozzles_number: "",
  nozzles_type: "",
  boom_pressure: "",
  boom_width: "",
  image: "",
};

export const gearDetailSlice = createSlice({
  name: "areaDetail",
  initialState,
  reducers: {
    changeGearDetails: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  // Action creators are generated for each case reducer function
});

export const { changeGearDetails } = gearDetailSlice.actions;

export default gearDetailSlice.reducer;
