import React, { useEffect, useRef, useState } from 'react';
import cl from './Test.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import TestItem from './TestItem';
import { closeSorting, deleteUser, sortUser } from '../../redux/slices/usersSlice';
import AddUser from './AddUser';

import { fetchUsers } from '../../redux/slices/usersSlice';

const Test = () => {
  const [sortTitle, setSortTitle] = useState('Name');
  const usersList = useSelector((store) => store.users.usersSearchList);
  const { status } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const openSorting = useSelector((store) => store.users.sortingClose);
  const isMountingUsers = useRef(false);

  useEffect(() => {
    if (isMountingUsers.current) {
      const usersJson = JSON.stringify(usersList);
      localStorage.setItem('users', usersJson);
    }
    isMountingUsers.current = true;
  }, [usersList]);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  function handleDeleteUser(id) {
    dispatch(deleteUser(id));
  }

  function sortBy(feel) {
    if (feel === 'name') {
      dispatch(sortUser({ feel: 'name' }));
      setSortTitle('Name');
    }
    if (feel === 'email') {
      dispatch(sortUser({ feel: 'email' }));
      setSortTitle('Email');
    }

    dispatch(closeSorting(false));
  }
  function clearLS() {
    localStorage.clear();
  }

  return (
    <div className='test__container'>
      <button onClick={clearLS}>Clear</button>
      {status === 'loading' && <h1>Loading</h1>}
      {status === 'error' && <h1>"error"</h1>}
      <div className={cl.sort}>
        <div className={cl.sort} onClick={(e) => e.stopPropagation()}>
          Sort by:
          <span className={cl.sort__title} onClick={() => dispatch(closeSorting(!openSorting))}>
            {sortTitle}
          </span>
          {openSorting && (
            <ul className={cl.sort__list}>
              <li onClick={() => sortBy('name')}>Name</li>
              <li onClick={() => sortBy('email')}>Email</li>
            </ul>
          )}
        </div>
      </div>
      <AddUser />

      {usersList && (
        <div className={cl.users}>
          {usersList.map((user, i) => (
            <TestItem key={user.id} number={i + 1} user={user} remove={handleDeleteUser} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Test;
