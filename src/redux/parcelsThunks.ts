import { createAsyncThunk } from "@reduxjs/toolkit";
import { Parcel } from "../contracts";
import { getFormattedDateTime } from "../helpers/dateFunc";
const shippingDate = new Date("2024-03-12T10:00:00+02:00");
const deliveryDate = new Date("2024-03-13T18:00:00+02:00");

const mockParcelData: Parcel = {
  details: {
    name: "Electronic Products",
    status: "In Transit",
    deliveryCost: 200,
  },
  deliveryAddress: {
    shippingAddress: {
      city: "Kyiv",
      street: "Yakonenko st. 35",
    },
    shippingDate: getFormattedDateTime(shippingDate),
    deliveryAddress: {
      city: "Dnipro",
      street: "Glinki st. 112",
    },
    deliveryDate: getFormattedDateTime(deliveryDate),
  },
  carrier: {
    name: "Alexander Ponomarenko",
    phoneNumber: "+38(095)324 3467",
  },
};

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
