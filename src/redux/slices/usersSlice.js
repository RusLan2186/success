import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  usersSearchList: [],
  isLoading: false,
  isError: '',
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action) {
      state.list = action.payload;
      state.isError = '';
      state.isLoading = false;
    },
    usersFetchingError(state, action) {
      state.isError = action.payload;
      state.isLoading = false;
    },
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
  },
});

export const {
  usersFetching,
  usersFetchingSuccess,
  usersFetchingError,
  addUser,
  deleteUser,
  changeUser,
  searchUser,
  sortUser,
} = userSlice.actions;
export default userSlice.reducer;
