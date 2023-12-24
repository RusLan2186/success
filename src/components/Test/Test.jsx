import React, { useEffect, useState } from 'react';
import cl from './Test.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import TestItem from './TestItem';
import {
  deleteUser,
  sortUser,
  usersFetching,
  usersFetchingError,
  usersFetchingSuccess,
} from '../../redux/slices/usersSlice';
import AddUser from './AddUser';

import { fetchUsers } from '../../redux/slices/usersCreator';

const Test = ({ changeIsSorted, isSorted }) => {
  const [sortTitle, setSortTitle] = useState('Name');

  const usersList = useSelector((store) => store.users.usersSearchList);
  const { isLoading, isError } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

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
    changeIsSorted(false);
  }

  return (
    <div className='test__container'>
      {isLoading && <h1>Loading</h1>}
      {isError && <h1>{isError}</h1>}
      <div className={cl.sort}>
        <div className={cl.sort} onClick={(e) => e.stopPropagation()}>
          Sort by:
          <span className={cl.sort__title} onClick={() => changeIsSorted(!isSorted)}>
            {sortTitle}
          </span>
          {isSorted && (
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
