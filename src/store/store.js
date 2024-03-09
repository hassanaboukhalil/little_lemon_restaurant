import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from './foodsSlice';

const store = configureStore({
    reducer: {
        foods: foodsReducer
    }
})

export default store;