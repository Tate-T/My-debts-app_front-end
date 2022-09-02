import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, addRecommendPayment }) => {
  const onKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  const onSubmit = e => {
    e.preventDefault();
    addRecommendPayment();

    // setInputValue('');
  };

  return createPortal(
    <div className={s.overlay} onClick={onBackdropClick}>
      <form className={s.modal} onSubmit={onSubmit}>
        <h2 className={s.title}>Recommend extra payment</h2>
        <label htmlFor="" className={s.label}>
          Interest rate <br />
          <input type="text" placeholder="Enter" className={s.input} />
        </label>
        <button type="submit" className={s.btn}>
          Recommend extra payment
        </button>
      </form>
    </div>,
    modalRoot
  );
};

export default Modal;
