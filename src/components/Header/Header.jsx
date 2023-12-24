import React, { useEffect, useState } from 'react';
import cl from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../../hooks/useInput';
import { searchUser } from '../../redux/slices/usersSlice';
import Modal from '../Modal/Modal';
import Cart from '../Cart/Cart';

const Header = () => {
  const searchResult = useSelector((store) => store.users.usersSearchList);
  const usersList = useSelector((store) => store.users.list);
  const searchInput = useInput('');
  const dispatch = useDispatch('');
  const [modal, setModal] = useState(false);
  const cartItems = useSelector((store) => store.cart.cartItems);
  const totalCount = cartItems.reduce((summ, item) => summ + item.count, 0);

  useEffect(() => {
    dispatch(searchUser(searchInput.value.toLowerCase()));
  }, [usersList, searchInput.value]);

  return (
    <div className={cl.header}>
      <div className='header__container'>
        <input className={cl.input} type='text' placeholder='Search' {...searchInput.bind} />
        <div onClick={() => setModal(!modal)} className={cl.cart}>
          <span> Cart</span>
          <span> {totalCount}</span>
        </div>
        <Modal visible={modal} setVisible={setModal}>
          <Cart changeModal={setModal} />
        </Modal>
      </div>
    </div>
  );
};

export default Header;
