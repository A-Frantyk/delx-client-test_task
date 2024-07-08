import { createAsyncThunk } from "@reduxjs/toolkit";
import { mockParcelData } from "../helpers/mockData";

export const fetchParcel = createAsyncThunk(
  "parcels/fetchParcel",
  async (_, thunkAPI) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return mockParcelData;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch parcel data");
    }
  },
);
