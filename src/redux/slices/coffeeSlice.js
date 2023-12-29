import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  coffee: [],
  status: 'loading',
};

export const fetchCoffee = createAsyncThunk('fetchCoffee', async () => {
  const { data } = await axios.get('https://api.sampleapis.com/coffee/hot');
  return data;
});

export const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    addCoffee(state, action) {
      state.coffee.unshift(action.payload);
    },
    deleteCoffee(state, action) {
      state.coffee = state.coffee.filter((c) => c.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoffee.pending, (state) => {
        state.status = 'loading';
        state.coffee = [];
      })
      .addCase(fetchCoffee.fulfilled, (state, action) => {
        state.status = 'success';
        state.coffee = action.payload;
      })
      .addCase(fetchCoffee.rejected, (state) => {
        state.status = 'error';
        state.coffee = [];
      });
  },
});

export const { coffeeFetch, coffeeFetchError, coffeeFetchSuccess, addCoffee, deleteCoffee } =
  coffeeSlice.actions;
export default coffeeSlice.reducer;
