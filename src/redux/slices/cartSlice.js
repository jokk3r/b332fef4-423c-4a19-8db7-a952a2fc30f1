import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj._id === action.payload._id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj._id === action.payload._id);
      if (findItem) {
        findItem.count--;
      }
    },
    removeItem(state, action) {
      console.log(action.payload);
      state.items = state.items.filter((obj) => obj._id !== action.payload._id);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
