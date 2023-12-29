import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  list: [],
  usersSearchList: [],
  isLoading: false,
  isError: '',
  status: 'loading',
  sortingClose: false,
};
export const fetchUsers = createAsyncThunk('users/fetchUsersStatus', async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
});

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      state.list.push(action.payload);
    },
    deleteUser(state, action) {
      state.list = state.list.filter((user) => user.id !== action.payload);
    },
    changeUser(state, action) {
      state.list.map((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
          user.email = action.payload.email;
        }
      });
    },
    searchUser(state, action) {
      state.usersSearchList = state.list.filter((user) =>
        user.name.toLowerCase().includes(action.payload),
      );
    },
    sortUser(state, action) {
      state.usersSearchList.sort((a, b) => {
        if (action.payload.feel === 'name') {
          return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
        }
        if (action.payload.feel === 'email')
          return a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1;
      });
    },
    closeSorting(state, action) {
      state.sortingClose = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.list = [];
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'success';
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'error';
        state.list = [];
      });
  },
});

export const {
  // usersFetching,
  // usersFetchingSuccess,
  // usersFetchingError,
  addUser,
  deleteUser,
  changeUser,
  searchUser,
  sortUser,
  closeSorting,
} = userSlice.actions;
export default userSlice.reducer;
