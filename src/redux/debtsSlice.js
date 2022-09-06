import { createSlice } from '@reduxjs/toolkit';
import { addDebt, getDebtsData } from './debtsOperations';

const initialState = {
    debts: [],
    isLoading: false,
    error: null,
};

const debtsSlice = createSlice({
    name: 'debts',
    initialState,

    extraReducers: builder => {
        builder
            .addCase(getDebtsData.pending, state => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(getDebtsData.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.debts.debtName = payload.debtName;
                state.debts.borrowerName = payload.borrowerName;
                state.debts.outstandingAmount = payload.outstandingAmount;
                state.debts.minimalPayment = payload.minimalPayment;
                state.debts.rate = payload.rate;
            })
            .addCase(getDebtsData.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(addDebt.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addDebt.fulfilled, (state, { payload }) => {
                state.debts.name = [...state.debts.name, payload];
            })
            .addCase(addDebt.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    },
});

export default debtsSlice.reducer;