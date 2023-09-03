import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./services/movieApi";
import { sessionSlice } from "./features/sessionSlice";
import { tabAnimationSlice } from "./features/tabAnimationSlice";

export const store = configureStore({
  reducer: {
    session: sessionSlice.reducer,
    tabsAnimation: tabAnimationSlice.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
