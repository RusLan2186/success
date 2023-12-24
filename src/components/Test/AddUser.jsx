import React from 'react';
import { useInput } from '../../hooks/useInput';
import { addUser } from '../../redux/slices/usersSlice';
import cl from './Test.module.scss';
import { useDispatch } from 'react-redux';

const AddUser = () => {
  const dispatch = useDispatch();
  const inputName = useInput('');
  const inputEmail = useInput('');
  function handleAddUser(name, email) {
    if (name.length > 2 && email.length > 5) {
      const newUser = { id: Date.now(), name, email };
      dispatch(addUser(newUser));
      inputName.clear();
      inputEmail.clear();
    } else {
      console.log('error');
    }
  }
  return (
    <div>
      <div className={cl.users__form}>
        <input className={cl.input} type='text' placeholder='Enter name' {...inputName.bind} />
        <input className={cl.input} type='text' placeholder='Enter email' {...inputEmail.bind} />
        <button
          onClick={() => handleAddUser(inputName.value, inputEmail.value)}
          className={cl.button}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddUser;
