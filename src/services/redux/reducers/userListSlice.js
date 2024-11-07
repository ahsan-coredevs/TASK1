// src/redux/blogsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const userListSlice = createSlice({
  name: 'userList',
  initialState: {
    userList:null
  },
  reducers: {
    setUserList: (state, action) => {
      state.userList=action.payload
    }
  }
});

export const { setUserList } = userListSlice.actions;
export default userListSlice.reducer;