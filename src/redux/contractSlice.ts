import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState, Parcel } from "../types";
import { fetchContract } from "./operations";
import { serializeDate } from "../utils";

const handlePending = (state: IState) => {
  state.loading = true;
  state.error = null;
};

const handleFulfilled = (state: IState, action: PayloadAction<Parcel>) => {
  state.details = action.payload.details;
  state.deliveryAddress = action.payload.deliveryAddress;
  state.carrier = action.payload.carrier;
  state.loading = false;
  state.error = null;
};

const handleRejected = (
  state: IState,
  action: PayloadAction<string | undefined>
) => {
  state.loading = false;
  state.error = action.payload || "Unknown error";
};

const initialState: IState = {
  details: {
    name: "",
    status: "",
    deliveryCost: 0,
  },
  deliveryAddress: {
    shippingAddress: {
      city: "",
      street: "",
    },
    shippingDate: serializeDate(new Date()),
    deliveryAddress: {
      city: "",
      street: "",
    },
    deliveryDate: serializeDate(new Date()),
  },
  carrier: {
    name: "",
    phoneNumber: "",
  },
  loading: false,
  error: null,
};

const contractSlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContract.pending, (state: IState) => handlePending(state))
      .addCase(
        fetchContract.fulfilled,
        (state: IState, payload: PayloadAction<Parcel>) =>
          handleFulfilled(state, payload)
      )
      .addCase(
        fetchContract.rejected,
        (state: IState, payload: PayloadAction<string | undefined>) =>
          handleRejected(state, payload)
      );
  },
});

export const contractReducer = contractSlice.reducer;
