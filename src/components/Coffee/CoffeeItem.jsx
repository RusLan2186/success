import React, { useEffect, useRef, useState } from 'react';
import cl from './Coffee.module.scss';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/slices/cartSlice';
import Modal from '../Modal/Modal';

const CoffeeItem = ({ coffee, number, remove }) => {
  const observer = useRef();
  const imageRef = useRef();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    let options = {
      threshold: 0.3,
    };
    let callback = function (entries) {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    };

    observer.current = new IntersectionObserver(callback, options);
    observer.current.observe(imageRef.current);
  }, []);

  const sendToCart = (id, title, image) => {
    dispatch(addCart({ id, title, image }));
  };

  const showNextImage = (id) => {};

  return (
    <div ref={imageRef} className={cl.coffeeItem}>
      <div className={cl.coffeeTitle}>
        <span>{number}.</span>
        <span>{coffee.title}</span>
        <button onClick={() => remove(coffee.id)} className='button'>
          Delete
        </button>
        <button
          onClick={() => sendToCart(coffee.id, coffee.title, coffee.image)}
          className='button'
        >
          Buy
        </button>
      </div>
      <div onClick={() => setOpenModal(true)} className={cl.coffeeImage}>
        {visible ? <img src={coffee.image} alt='coffee' /> : <div className={cl.hid}></div>}
      </div>
      <Modal visible={openModal} setVisible={setOpenModal}>
        <div className={cl.imageModalWrapper}>
          <span>prev</span>
          <div className={cl.imageModal}>
            <img src={coffee.image} alt='coffee' />
          </div>
          <span onClick={() => showNextImage(coffee.id)}>next</span>
        </div>
      </Modal>
    </div>
  );
};

export default CoffeeItem;
