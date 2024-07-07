import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import type { Parcel } from 'types/contracts';

import parcelData from '../../data/parcel.json';

type InitialState = {
  parcel: Parcel | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: InitialState = {
  parcel: null,
  status: 'idle',
  error: null,
};

export const fetchParcel = createAsyncThunk('parcel/fetchParcel', async () => {
  const response = await new Promise<Parcel>((resolve) => {
    setTimeout(() => {
      resolve(parcelData);
    }, 2000);
  });

  return response;
});

const parcelSlice = createSlice({
  name: 'parcel',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchParcel.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      fetchParcel.fulfilled,
      (state, action: PayloadAction<Parcel>) => {
        state.status = 'succeeded';
        state.parcel = action.payload;
      }
    );
    builder.addCase(fetchParcel.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || 'Failed to fetch data';
    });
  },
});

export default parcelSlice.reducer;
