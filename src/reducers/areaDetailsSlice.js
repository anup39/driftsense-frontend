import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plot_name: "",
  crop_type_id: "",
  crop_geometry_id: "",
  crop_type: "",
  crop_type_image: "",
  crop_geometry: "",
  spray_duration_hour: "",
  spray_duration_minutes: "",
  selected_location: "",
  acerage: "",
};

export const areaDetailSlice = createSlice({
  name: "areaDetail",
  initialState,
});

// Action creators are generated for each case reducer function

export default areaDetailSlice.reducer;
