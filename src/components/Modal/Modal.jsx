import React, { useEffect } from 'react';
import cl from './Modal.module.scss';
import CoffeeSlider from '../Coffee/CoffeeSlider';

const Modal = ({ visible, setVisible, children, id }) => {
  const modalClass = `${cl.modal} + ${cl.modalAct}`;
  const modalClassContent = `${cl.content} + ${cl.contentAct}`;

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [visible]);

  return (
    <div onClick={() => setVisible(false)} className={visible ? modalClass : cl.modal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={visible ? modalClassContent : cl.content}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
