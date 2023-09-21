import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEvents = createAsyncThunk('event/fetchEventsStatus', async () => {
  const baseURL = 'https://teclead-ventures.github.io/data/london-events.json';
  const { data } = await axios.get(baseURL);
  return data;
});
const initialState = {
  items: [],
  status: 'loading',
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchEvents.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchEvents.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchEvents.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = eventSlice.actions;

export default eventSlice.reducer;
