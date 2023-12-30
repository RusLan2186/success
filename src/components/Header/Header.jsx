import React, { useEffect, useRef, useState } from 'react';
import cl from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../../hooks/useInput';
import { searchUser } from '../../redux/slices/usersSlice';
import Modal from '../Modal/Modal';
import Cart from '../Cart/Cart';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const usersList = useSelector((store) => store.users.list);
  const searchInput = useInput('');
  const dispatch = useDispatch('');
  const [modal, setModal] = useState(false);
  const cartItems = useSelector((store) => store.cart.cartItems);
  const password = useSelector((store) => store.enter.password);
  const isMounted = useRef(false);

  const totalCount = cartItems.reduce((summ, item) => summ + item.count, 0);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cartItems);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [cartItems]);

  useEffect(() => {
    dispatch(searchUser(searchInput.value.toLowerCase()));
  }, [usersList, searchInput.value]);

  return (
    <div className={cl.header}>
      <div className='header__container'>
        <input className={cl.input} type='text' placeholder='Search' {...searchInput.bind} />
        <nav className={cl.menu}>
          <NavLink className={cl.link} to={'/'}>
            Home
          </NavLink>
          {password && (
            <div style={{ display: 'flex', columnGap: '15px' }}>
              <NavLink className={cl.link} to={'/test'}>
                Test
              </NavLink>
              <NavLink className={cl.link} to={'/coffee'}>
                Coffee
              </NavLink>
              <NavLink className={cl.link} to={'/todo'}>
                Todo
              </NavLink>
            </div>
          )}
        </nav>
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
