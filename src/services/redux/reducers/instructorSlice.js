
import { createSlice } from '@reduxjs/toolkit';

const instructorSlice = createSlice({
  name: 'instructor',
  initialState: {
    instructor:[]
  },
  reducers: {
    setInstructor: (state, action) => {
      state.instructor=action.payload
    }
  }
});

export const { setInstructor } = instructorSlice.actions;
export default instructorSlice.reducer;
