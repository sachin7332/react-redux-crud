// loaderSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loaderSlice.actions;

export const selectLoading = (state) => state.loader.loading;

export default loaderSlice.reducer;
