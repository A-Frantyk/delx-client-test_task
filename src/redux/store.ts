import { configureStore } from "@reduxjs/toolkit";
import { contractReducer } from "./contractSlice";

export const store = configureStore({
  reducer: contractReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
