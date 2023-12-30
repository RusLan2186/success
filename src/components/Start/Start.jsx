import React from 'react';
import { useInput } from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { enter } from '../../redux/slices/enterSlice';
import { NavLink } from 'react-router-dom';

const Start = () => {
  const passwordInput = useInput('');
  const dispatch = useDispatch();
  const password = useSelector((store) => store.enter.password);

  function changePassword() {
    if (passwordInput.value === '999') {
      dispatch(enter(true));
    }
  }
  return (
    <div className='start__container'>
      {!password ? (
        <div>
          <input
            className='input'
            type='password'
            placeholder='Enter password'
            {...passwordInput.bind}
          />
          <button onClick={changePassword} className='button'>
            Enter
          </button>
        </div>
      ) : (
        <div>
          <h1 className='title'> Wellcome</h1>
          <NavLink to='/test'>Continue</NavLink>
        </div>
      )}
    </div>
  );
};

export default Start;
