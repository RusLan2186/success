import './scss/App.scss';
import Header from './components/Header/Header';
import AppRouter from './routing/AppRouter';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeSorting } from './redux/slices/usersSlice';

const App = () => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(closeSorting(false))}>
      <header>
        <Header />
      </header>
      <AppRouter />
    </div>
  );
};

export default App;
