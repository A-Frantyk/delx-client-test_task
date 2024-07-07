import { configureStore } from "@reduxjs/toolkit";
import parcelsReducer from "../redux/parcelsSlice";

const store = configureStore({
  reducer: {
    parcels: parcelsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
