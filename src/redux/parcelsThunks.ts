import { createAsyncThunk } from "@reduxjs/toolkit";
const shippingDate = new Date("2024-03-12T10:00:00+02:00");
const deliveryDate = new Date("2024-03-13T18:00:00+02:00");

const mockParcelData = {
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
    shippingDate: shippingDate.toISOString(),
    deliveryAddress: {
      city: "Dnipro",
      street: "Glinki st. 112",
    },
    deliveryDate: deliveryDate.toISOString(),
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
