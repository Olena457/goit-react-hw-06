import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const selectNameFilter = state => state.filters.name;
export const filtersReducer = filterSlice.reducer;
