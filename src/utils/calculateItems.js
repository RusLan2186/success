import { useMemo } from 'react';

export const calculateCount = (cartItems) => {
  return cartItems.reduce((summ, item) => summ + item.count, 0);
};

export const calculatePrice = (cartItems) => {
  return cartItems.reduce((summ, item) => item.id * item.count + summ, 0);
};
