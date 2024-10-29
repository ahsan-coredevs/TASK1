import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './reducers/blogSlice';
import courseSlice from './reducers/courseSlice';
import instructorSlice from './reducers/instructorSlice';
import orderSlice from './reducers/orderSlice';
import userSlice from './reducers/userSlice';


export const store = configureStore({
  reducer: {
    blogs: blogSlice,
    course: courseSlice,
    instructor: instructorSlice,
    order: orderSlice,
    user: userSlice

  },
})