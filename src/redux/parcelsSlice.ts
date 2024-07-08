import { createSlice } from "@reduxjs/toolkit";
import { ParcelInput } from "../contracts";
import { fetchParcel } from "./parcelsThunks";

interface ParcelsState {
  data: ParcelInput | null;
  loading: boolean;
  error: string | null;
}

const initialState: ParcelsState = {
  data: null,
  loading: false,
  error: null,
};

const parcelsSlice = createSlice({
  name: "parcels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchParcel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchParcel.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchParcel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default parcelsSlice.reducer;
