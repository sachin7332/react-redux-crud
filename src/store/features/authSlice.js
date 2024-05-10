// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user : {}
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: state => {
      state.isAuthenticated = true;
      state.user = {name : "Sachin"};
    },
    logout: state => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectIsAuthenticated = state => state.auth.isAuthenticated;

export default authSlice.reducer;
