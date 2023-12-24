import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './Cart.module.scss';
import { clearCart, deleteCart, quantityCoffee } from '../../redux/slices/cartSlice';

const Cart = ({ changeModal }) => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const totalPrice = useSelector((store) => store.cart.totalPrice);
  const totalCount = useSelector((store) => store.cart.totalCount);
  const dispatch = useDispatch();

  // console.log(totalCount);

  const handleDeleteCoffee = (id) => {
    if (window.confirm('Do you really want to delete?')) {
      dispatch(deleteCart(id));
    }
  };

  const handlePlus = (count, id, feel) => {
    dispatch(quantityCoffee({ count, id, feel }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className={cl.cartWrapper}>
      {cartItems.length !== 0 ? (
        <div>
          <div className={cl.clear}>
            <button onClick={handleClearCart} className='button'>
              Clear cart
            </button>
          </div>

          {cartItems.map((item, i) => (
            <div key={item.id} className={cl.cartItem}>
              <div className={cl.cartContent}>
                <div className={cl.cartHeader}>
                  <span>{item.id}</span>
                  <span>{item.title}</span>
                  <button onClick={() => handleDeleteCoffee(item.id)} className='button'>
                    Delete
                  </button>
                </div>
                <div className={cl.cartImage}>
                  <img src={item.image} alt='coffee' />
                </div>
              </div>
              <div className={cl.cartActions}>
                <button
                  onClick={() => handlePlus(item.count, item.id, 'plus')}
                  className={cl.cartBtn}
                >
                  +
                </button>
                <span>{item.count}</span>

                <button
                  onClick={() => handlePlus(item.count, item.id, 'minus')}
                  className={item.count > 1 ? cl.cartBtn : cl.cartBtnDis}
                >
                  -
                </button>
              </div>
            </div>
          ))}
          <div> Count {totalCount}</div>
          <div> Count ID {totalPrice}</div>
        </div>
      ) : (
        <div>
          <h1>Why do you didn't buy our coffee?</h1>
          <button onClick={() => changeModal(false)} className='button'>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
