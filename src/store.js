import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./reducers/authSlice";
import { authApi } from "./api/authApi";
import { profileApi } from "./api/profileApi";
import createFieldMapSliceReducer from "./reducers/createFieldMapSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    createFieldMap: createFieldMapSliceReducer,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, profileApi.middleware),
});
setupListeners(store.dispatch);
