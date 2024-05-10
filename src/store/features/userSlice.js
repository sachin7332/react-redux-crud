// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiInstance from 'services/apiInstance';

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await apiInstance.get('/users');
  return response.data;
});

// Async thunk for adding a user
export const addUser = createAsyncThunk('users/addUser', async (userData) => {
  const response = await apiInstance.post('/users', userData);
  return response.data;
});

// Async thunk for updating a user
export const updateUser = createAsyncThunk('users/updateUser', async ({ userId, userData }) => {
  const response = await apiInstance.put(`/users/${userId}`, userData);
  return response.data;
});

// Async thunk for deleting a user
export const deleteUser = createAsyncThunk('users/deleteUser', async (userId) => {
  await apiInstance.delete(`/users/${userId}`);
  return userId;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedUserIndex = state.users.findIndex(user => user.id === action.payload.id);
        if (updatedUserIndex !== -1) {
          state.users[updatedUserIndex] = action.payload;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
