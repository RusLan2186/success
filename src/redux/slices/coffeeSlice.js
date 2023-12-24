import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coffee: [],
  isLoad: false,
  isError: '',
};

export const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    coffeeFetch(state) {
      state.isLoad = true;
    },
    coffeeFetchSuccess(state, action) {
      state.coffee = action.payload;
      state.isLoad = false;
      state.isError = '';
    },
    coffeeFetchError(state, action) {
      state.isLoad = false;
      state.isError = action.payload;
    },
    addCoffee(state, action) {
      state.coffee.unshift(action.payload);
    },
    deleteCoffee(state, action) {
      state.coffee = state.coffee.filter((c) => c.id !== action.payload);
    },
  },
});

export const { coffeeFetch, coffeeFetchError, coffeeFetchSuccess, addCoffee, deleteCoffee } =
  coffeeSlice.actions;
export default coffeeSlice.reducer;
