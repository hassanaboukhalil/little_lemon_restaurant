import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

// Define a thunk for fetching data asynchronously
export const fetchCartData = createAsyncThunk('cart/fetchCartData', async () => {
    const response = await axios.get('/carts.json')
    const data = response.data
    const foods = data[0].cart
    return foods;
});

const initialState = {
    loading: false,
    error: null,
    data: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
          .addCase(fetchCartData.pending, state => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchCartData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(fetchCartData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
    },
})


export const cartActions = cartSlice.actions
export default cartSlice.reducer;