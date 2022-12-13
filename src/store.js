import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./reducers/authSlice";
import { authApi } from "./api/authApi";
import { userInfoApi } from "./api/userInfoApi";
import { fieldApi } from "./api/fieldApi";
import { gearApi } from "./api/gearApi";
import createFieldMapSliceReducer from "./reducers/createFieldMapSlice";
import areaDetailsSliceReducer from "./reducers/areaDetailsSlice";
import createGearSliceReducer from "./reducers/createGearSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    createFieldMap: createFieldMapSliceReducer,
    areaDetails: areaDetailsSliceReducer,
    createGear: createGearSliceReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userInfoApi.reducerPath]: userInfoApi.reducer,
    [fieldApi.reducerPath]: fieldApi.reducer,
    [gearApi.reducerPath]: gearApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userInfoApi.middleware,
      fieldApi.middleware,
      gearApi.middleware
    ),
});
setupListeners(store.dispatch);
