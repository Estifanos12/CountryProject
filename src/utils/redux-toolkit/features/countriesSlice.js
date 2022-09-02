import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 country: false,
};

export const countriesSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    switchBack(state){
        state.country(!state.country)
    }
  },
});

export const { switchBack } = countriesSlice.actions;
export default countriesSlice.reducer;
