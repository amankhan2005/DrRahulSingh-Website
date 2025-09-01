import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './slices/dataslice.js'
import appointmentReducer from "./slices/appointmentSlice.js";


const store = configureStore({
    reducer: {
        data: dataReducer,
            appointments: appointmentReducer,

    },
});

export default store;
