import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./services/movieApi";
import { sessionSlice } from "./features/sessionSlice";

export const store = configureStore({
  reducer: {
    session: sessionSlice.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
