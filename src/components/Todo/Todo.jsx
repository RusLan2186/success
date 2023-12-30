import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from '../../redux/slices/todoSlice';

const Todo = () => {
  const { todos, status } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);
  console.log(todos);
  return (
    <div className='todo__container'>
      <h1>Todo</h1>
      {status === 'loading' && <h2> Loading...</h2>}
      {status === 'error' && <h2> Error</h2>}
    </div>
  );
};

export default Todo;
