import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action) => {
      state.count += action.payload;
    },
    reset: (state, action) => {
      state.count = 0;
    },
  },
});

export const { add, reset } = slice.actions;
export default slice.reducer;
