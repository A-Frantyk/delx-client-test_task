import { createSlice } from '@reduxjs/toolkit';
import { ParcelDetails } from '@/components/contracts.ts';
import { RootState } from '@/store/store.tsx';

const initialState: ParcelDetails = {
    name: '',
    status: '',
    deliveryCost: 0,
}

export const parselDetailsSlice = createSlice({
    name: 'parselDetails',
    initialState,
    reducers: {
        saveParselDetails(state, {payload}) {
            state.name = payload.name;
            state.status = payload.status;
            state.deliveryCost = payload.deliveryCost;
        }
    }
})

export const parseDetailsReducer = parselDetailsSlice.reducer;

export const { saveParselDetails } = parselDetailsSlice.actions;

export const selectParselDetails = (state: RootState) => state.parselDetails
