import { configureStore } from '@reduxjs/toolkit';
import parcelReducer from './features/parcelSlice.ts';

const store = configureStore({
  reducer: {
    parcel: parcelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
