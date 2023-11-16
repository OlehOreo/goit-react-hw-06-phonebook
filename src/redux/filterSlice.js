import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onSearchContact(state, action) {
      console.log('33333', state);
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { onSearchContact } = filterSlice.actions;
