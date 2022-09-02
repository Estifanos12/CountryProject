import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
};

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    toggleMode: (state) => {
      if (state.mode === 'light') {
        state.mode = 'dark';
      } else {
        state.mode = 'light';
      }
    },
  },
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;
