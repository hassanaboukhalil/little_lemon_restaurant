import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from './foodsSlice';
import authReducer from './authSlice'
import cartReducer from './cartSlice'

const store = configureStore({
    reducer: {
        foods: foodsReducer,
        auth: authReducer,
        cart: cartReducer
    }
})

export default store;