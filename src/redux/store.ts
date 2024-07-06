import { configureStore } from '@reduxjs/toolkit';

import parcelReducer from './slices/parcelSlice';

export const store = configureStore({
  reducer: { parcelReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
