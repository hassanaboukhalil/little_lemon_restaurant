import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define a thunk for fetching data asynchronously
export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async () => {
    const response = await axios.get("/carts.json");
    const data = response.data;
    const foods = data[0].cart.map((item) => ({
      ...item,
      amount: Number(item.amount),
    }));
    return foods;
  }
);

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    minusItem: (state, action) => {
      let foodName = action.payload.name;
      for (let i = 0; i < state.data.length; i++) {
        if (state.data[i].name === foodName) {
          state.data[i].amount--;
          if (state.data[i].amount === 0) {
            state.data = state.data.filter((item) => item.name !== foodName);
          }
          break;
        }
      }
    },
    plusItem: (state, action) => {
      let foodName = action.payload.name;
      for (let i = 0; i < state.data.length; i++) {
        if (state.data[i].name === foodName) {
          state.data[i].amount++;
          break;
        }
      }
    },
    removeItem: (state, action) => {
      let foodName = action.payload.name;
      for (let i = 0; i < state.data.length; i++) {
        if (state.data[i].name === foodName) {
          state.data = state.data.filter((item) => item.name !== foodName);
          break;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
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
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
