import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from './foodsSlice';
import authReducer from './authSlice'

const store = configureStore({
    reducer: {
        foods: foodsReducer,
        auth: authReducer
    }
})

export default store;