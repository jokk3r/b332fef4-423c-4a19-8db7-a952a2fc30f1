import { configureStore } from '@reduxjs/toolkit';
import cart from '../redux/slices/cartSlice';

export const store = configureStore({
  reducer: {
    cart,
  },
});
