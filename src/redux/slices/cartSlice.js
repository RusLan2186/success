import { createSlice } from '@reduxjs/toolkit';
import { calculateCount, calculatePrice } from '../../utils/calculateItems';
import { getCartFromLs } from '../../utils/getCartFromLS';

const { cartItems, totalPrice, totalCount } = getCartFromLs();

const initialState = {
  cartItems,
  totalPrice,
  totalCount,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action) {
      const findItem = state.cartItems.find((c) => c.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calculatePrice(state.cartItems);
      state.totalCount = calculateCount(state.cartItems);
    },

    deleteCart(state, action) {
      state.cartItems = state.cartItems.filter((cart) => cart.id !== action.payload);
      state.totalPrice = calculatePrice(state.cartItems);
      state.totalCount = calculateCount(state.cartItems);
    },
    quantityCoffee(state, action) {
      const findItem = state.cartItems.find((c) => c.id === action.payload.id);
      findItem.count = action.payload.count;
      if (action.payload.feel === 'plus') findItem.count++;
      if (action.payload.feel === 'minus') findItem.count--;

      state.totalPrice = calculatePrice(state.cartItems);
      state.totalCount = calculateCount(state.cartItems);
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const { addCart, deleteCart, quantityCoffee, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
