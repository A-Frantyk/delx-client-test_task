import { createAsyncThunk } from "@reduxjs/toolkit";
import { Parcel } from "../types";
import { fetchParcelData } from "../data";

interface ThunkConfig {
  rejectValue: string;
}

export const fetchContract = createAsyncThunk<Parcel, void, ThunkConfig>(
  "parcel/fetchContract",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchParcelData();

      if (!response) {
        return rejectWithValue("Something went wrong");
      }

      return {
        ...response,
        deliveryAddress: {
          shippingAddress: response.deliveryAddress.shippingAddress,
          shippingDate: response.deliveryAddress.shippingDate.toString(),
          deliveryAddress: response.deliveryAddress.deliveryAddress,
          deliveryDate: response.deliveryAddress.deliveryDate.toString(),
        },
      } as Parcel;
    } catch (error) {
      return rejectWithValue("Failed to fetch parcel data");
    }
  }
);
