import { createSlice } from '@reduxjs/toolkit';

const filterContactsSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterContactsSlice.actions;

export const filtersReducer = filterContactsSlice.reducer;

export const getFilterValue = state => state.filter;
