import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlice';
import coffeeSlice from './slices/coffeeSlice';
import cartSlice from './slices/cartSlice';
import enterSlice from './slices/enterSlice';
import todoSlice from './slices/todoSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    coffee: coffeeSlice,
    cart: cartSlice,
    todo: todoSlice,
    enter: enterSlice,
  },
});
