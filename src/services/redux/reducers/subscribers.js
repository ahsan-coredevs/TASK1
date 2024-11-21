// src/redux/blogsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const subscribersSlice = createSlice({
  name: 'subscribers',
  initialState: {
    subscribers:null
  },
  reducers: {
    setSubscribers: (state, action) => {
      state.subscribers=action.payload
    }
  }
});

export const { setSubscribers } = subscribersSlice.actions;
export default subscribersSlice.reducer;