import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './slices/dataslice.js'

const store = configureStore({
    reducer: {
        data: dataReducer,
    },
});

export default store;
