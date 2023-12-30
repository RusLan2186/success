import { calculateCount, calculatePrice } from './calculateItems';

export const getCartFromLs = () => {
  const cart = localStorage.getItem('cart');
  const users = localStorage.getItem('users');

  const usersItems = users ? JSON.parse(users) : [];
  const cartItems = cart ? JSON.parse(cart) : [];

  const totalPrice = calculatePrice(cartItems);
  const totalCount = calculateCount(cartItems);
  return {
    cartItems,
    totalPrice,
    totalCount,
    usersItems,
  };
};
