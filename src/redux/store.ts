import { combineReducers, configureStore } from "@reduxjs/toolkit";
import parcelsReducer from "../redux/parcelsSlice";
const rootReducer = combineReducers({ parcels: parcelsReducer });

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
