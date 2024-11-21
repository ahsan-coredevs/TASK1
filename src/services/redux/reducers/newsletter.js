// src/redux/blogsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const newLetterSlice = createSlice({
  name: 'newsletter',
  initialState: {
    newsLetter:null
  },
  reducers: {
    setNewsLetter: (state, action) => {
      state.newsLetter=action.payload
    }
  }
});

export const { setNewsLetter } = newLetterSlice.actions;
export default newLetterSlice.reducer;