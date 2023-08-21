import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { todoApi } from "../services/TodoApi";

const middleware = [...getDefaultMiddleware(), todoApi.middleware];

const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: middleware,
});

export default store;
