import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Parcel } from '../../contracts.ts';


interface ParcelState {
  parcel: Parcel | null;
  loading: boolean;
  error: string | null;
}

const initialState: ParcelState = {
  parcel: null,
  loading: false,
  error: null,
};

export const fetchParcel = createAsyncThunk('parcel/fetchParcel', async () => {
  const response = await new Promise<{ data: Parcel }>((resolve) =>
    setTimeout(() => {
      resolve({
        data: {
          details: {
            name: 'Electronic Products',
            status: 'In Transit',
            deliveryCost: 200,
          },
          deliveryAddress: {
            shippingAddress: {
              city: 'Kyiv',
              street: 'Yakonenko st. 35',
            },
            shippingDate: new Date('2024-03-12T10:00:00Z'),
            deliveryAddress: {
              city: 'Dnipro',
              street: 'Glinku st. 112',
            },
            deliveryDate: new Date('2024-03-13T18:00:00Z'),
          },
          carrier: {
            name: 'Alexander Ponomarenko',
            phoneNumber: '+38(095)3243467',
          },
        },
      });
    }, 1000)
  );
  return response.data;
});

const parcelSlice = createSlice({
  name: 'parcel',
  initialState,
  reducers: {
    setParcel: (state, action: PayloadAction<Parcel>) => {
      state.parcel = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchParcel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchParcel.fulfilled, (state, action: PayloadAction<Parcel>) => {
        state.loading = false;
        state.parcel = action.payload;
      })
      .addCase(fetchParcel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch parcel';
      });
  },
});

export const { setParcel } = parcelSlice.actions;

export default parcelSlice.reducer;
