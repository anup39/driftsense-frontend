import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plot_name: "My plot",
  crop_type: "",
  crop_type_image: "",
  crop_geometry: "",
  spray_duration_hour: "1",
  spray_duration_minutes: "12",
  selected_location: "Nepal",
  acerage: "500",
};

export const areaDetailSlice = createSlice({
  name: "areaDetail",
  initialState,
  //   reducers: {
  //     addToken: (state, action) => {
  //       state.token = action.payload;
  //     },
  //     addFullName: (state, action) => {
  //       state.full_name = action.payload;
  //     },
  //     clearToken: (state) => {
  //       state.token = undefined;
  //     },
  //     clearFullName: (state) => {
  //       state.full_name = undefined;
  //     },
  //   },
});

// Action creators are generated for each case reducer function
// export const { addToken, addFullName, clearToken, clearFullName } =
//   areaDetailSlice.actions;

export default areaDetailSlice.reducer;
