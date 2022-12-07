import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./reducers/authSlice";
import { authApi } from "./api/authApi";
import { userInfoApi } from "./api/userInfoApi";
import { fieldApi } from "./api/fieldApi";
import createFieldMapSliceReducer from "./reducers/createFieldMapSlice";
import areaDetailsSliceReducer from "./reducers/areaDetailsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    createFieldMap: createFieldMapSliceReducer,
    areaDetails: areaDetailsSliceReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userInfoApi.reducerPath]: userInfoApi.reducer,
    [fieldApi.reducerPath]: fieldApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userInfoApi.middleware,
      fieldApi.middleware
    ),
});
setupListeners(store.dispatch);
