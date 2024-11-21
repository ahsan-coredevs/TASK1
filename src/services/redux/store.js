import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './reducers/blogSlice';
import courseSlice from './reducers/courseSlice';
import instructorSlice from './reducers/instructorSlice';
import orderSlice from './reducers/orderSlice';
import userSlice from './reducers/userSlice';
import userListSlice from './reducers/userListSlice';
import NewsLetters from './reducers/newsletter';
import subscribersSlice from './reducers/subscribers';




export const store = configureStore({
  reducer: {
    blogs: blogSlice,
    course: courseSlice,
    instructor: instructorSlice,
    order: orderSlice,
    user: userSlice,
    userList: userListSlice,
    newsLetter: NewsLetters,
    subscribers : subscribersSlice

  },
})