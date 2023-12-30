import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  todo: [],
  todoLoad: 'loading',
  limit: 10,
  page: 1,
};

export const fetchTodo = createAsyncThunk('fetchTodo', async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos', {
    //  params: {
    //    _limit: 20,
    //    _page: 1,
    //  },
  });
  return data;
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.status = 'loading';
        state.todo = [];
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.status = 'success';
        state.todo = action.payload;
      })
      .addCase(fetchTodo.rejected, (state) => {
        state.status = 'error';
        state.todo = [];
      });
  },
});
export default todoSlice.reducer;
