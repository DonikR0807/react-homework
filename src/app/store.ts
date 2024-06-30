import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userReducer } from "src/features/Auth";
import { filterReducer } from "src/features/Filter";
import { searchReducer } from "src/features/Search";
import { api } from "src/shared/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    filter: filterReducer,
    search: searchReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
