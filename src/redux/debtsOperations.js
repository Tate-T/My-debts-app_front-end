import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

import {
    addDebtApi, fetchDebts
} from '../services/debtsAPI.js';

export const addDebt = createAsyncThunk('debts/add', async (newDebt, thunkApi) => {
    try {
        const addedDebt = await addDebtApi(newDebt);
        Notify.success(
            `Your debt information "${newDebt.debtName}" is added to list`
        );
        return addedDebt;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const getDebtsData = createAsyncThunk(
    'debts/getDebtsData',
    async (_, thunkApi) => {
        try {
            const data = await fetchDebts();

            // const debtData = await fetchDebts().catch(error => {
            //     if (error.request?.status === 403) {
            //         return null;
            //     } else {
            //         throw error;
            //     }
            // });

            // if (debtData === null) {
            //     data.debtData = null;
            // } else {
            //     data.debtData = debtData;
            // }

            return data.data.response;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);
