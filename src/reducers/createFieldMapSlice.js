import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  draw: false,
  showPopup: false,
  showCancel: "invisible",
  layers: [],
  field_create: true,
  showDetailsForm: false,
  showDetailsSucessLoading: false,
  completed_create_field: false,
  farmer_layers: [],
  area_details_edit: false,
  enable_select: true,
  field_geom_edit: false,
  field_id: undefined,
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

const toggleshowDetailsSucessLoadingFunc = (state, action) => ({
  ...state,
  showDetailsSucessLoading: action.payload,
});

const toggleSaveSucessfullyFunc = (state, action) => ({
  ...state,
  completed_create_field: action.payload,
});

// under review
const toggleFarmerLayersFunc = (state, action) => {
  return {
    ...state,
    farmer_layers: [...state.farmer_layers, ...action.payload],
  };
};

const toggleFieldGeomEditFunc = (state, action) => ({
  ...state,
  field_geom_edit: action.payload,
});

const editLayerFunc = (state, action) => {
  state.layers = [];
  state.layers.push(action.payload);
};

const toggleFieldIdFunc = (state, action) => ({
  ...state,
  field_id: action.payload,
});

const toggleFormCreateFunc = (state, action) => ({
  ...state,
  field_create: action.payload,
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
    toggleshowDetailsSucessLoading: toggleshowDetailsSucessLoadingFunc,
    toggleSaveSucessfully: toggleSaveSucessfullyFunc,
    toggleFarmerLayers: toggleFarmerLayersFunc,
    toggleFieldGeomEdit: toggleFieldGeomEditFunc,
    editLayer: editLayerFunc,
    toggleFieldId: toggleFieldIdFunc,
    toggleFormCreate: toggleFormCreateFunc,
  },
});

export const {
  togglePopup,
  toggleDraw,
  toggleShowCancel,
  toggleLayers,
  clearLayers,
  toggleshowDetailsForm,
  toggleshowDetailsSucessLoading,
  toggleSaveSucessfully,
  editLayer,
  toggleFarmerLayers,
  addPropertiesGeojson,
  toggleFieldGeomEdit,
  toggleFieldId,
  toggleFormCreate,
} = createFieldMapslice.actions;

export default createFieldMapslice.reducer;
