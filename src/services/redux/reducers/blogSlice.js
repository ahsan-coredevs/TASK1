// src/redux/blogsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs:null
  },
  reducers: {
    setBlogs: (state, action) => {
      state.blogs=action.payload
    }
  }
});

export const { setBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;
