import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  draw: false,
  showPopup: false,
  showCancel: "invisible",
  layers: [],
  showDetailsForm: false,
};

const togglePopupFunc = (state, action) => ({
  ...state,
  showPopup: !!action.payload,
});

const toggleDrawFunc = (state, action) => ({
  ...state,
  draw: action.payload,
});
const toggleShowCancelFunc = (state, action) => ({
  ...state,
  showCancel: action.payload,
});

const toggleLayersFunc = (state, action) => {
  state.layers.push(action.payload);
};
const clearLayersFunc = (state, action) => {
  state.layers = [];
};

const toggleshowDetailsFormFunc = (state, action) => ({
  ...state,
  showDetailsForm: action.payload,
});

export const createFieldMapslice = createSlice({
  name: "createFieldMap",
  initialState,
  reducers: {
    togglePopup: togglePopupFunc,
    toggleDraw: toggleDrawFunc,
    toggleShowCancel: toggleShowCancelFunc,
    toggleLayers: toggleLayersFunc,
    clearLayers: clearLayersFunc,
    toggleshowDetailsForm: toggleshowDetailsFormFunc,
  },
});

export const {
  togglePopup,
  toggleDraw,
  toggleShowCancel,
  toggleLayers,
  clearLayers,
  toggleshowDetailsForm,
} = createFieldMapslice.actions;

export default createFieldMapslice.reducer;
