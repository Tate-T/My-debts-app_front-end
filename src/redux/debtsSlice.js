import { createSlice } from '@reduxjs/toolkit';
import { addDebt, getDebtsData } from './debtsOperations';

const initialState = {
    debts: {
        title: "",
        name: "",
        amount: 0,
        payment: 0,
        rate: 0
    },
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
                state.debts.title = payload.title;
                state.debts.name = payload.name;
                state.debts.amount = payload.amount;
                state.debts.payment = payload.payment;
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