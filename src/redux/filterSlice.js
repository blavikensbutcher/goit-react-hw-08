import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: {
      name: '',
    },
  },
  reducers: {
    filter(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
