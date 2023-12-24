import React, { useState } from 'react';
import cl from './Test.module.scss';
import { useInput } from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { changeUser } from '../../redux/slices/usersSlice';

const TestItem = ({ user, number, remove }) => {
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();

  const inputChangeName = useInput(user.name);
  const inputChangeAge = useInput(user.email);

  function cancelChanges() {
    setChange(false);
  }

  function handleChangeUser(id, name, email) {
    dispatch(changeUser({ id, name, email }));
    setChange(false);
  }

  return (
    <div>
      {!change ? (
        <div className={cl.user}>
          <span> {number}</span>
          <span> {user.name}</span>
          <span> {user.email}</span>
          <button onClick={() => remove(user.id)} className={cl.button}>
            Delene
          </button>
          <button onClick={() => setChange(!change)} className={cl.button}>
            Change
          </button>
        </div>
      ) : (
        <div>
          <input
            className={cl.input}
            type='text'
            placeholder='Enter name'
            {...inputChangeName.bind}
          />

          <input
            className={cl.input}
            type='text'
            placeholder='Enter email'
            {...inputChangeAge.bind}
          />
          <button
            onClick={() => handleChangeUser(user.id, inputChangeName.value, inputChangeAge.value)}
            className={cl.button}
          >
            Save
          </button>
          <button onClick={cancelChanges} className={cl.button}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default TestItem;
