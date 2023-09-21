import { configureStore } from '@reduxjs/toolkit';
import cart from '../redux/slices/cartSlice';
import event from '../redux/slices/eventSlice';

export const store = configureStore({
  reducer: {
    cart,
    event,
  },
});
