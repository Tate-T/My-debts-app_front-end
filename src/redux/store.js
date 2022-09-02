import { configureStore } from '@reduxjs/toolkit';
import debtsReducer from './debtsSlice';

const store = configureStore({
    reducer: {
        debts: debtsReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
});

export default store;