import { useEffect } from 'react';
// import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
import { ReactComponent as Close } from '../../images/close.svg';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';
import s from './Modal.module.scss';

// const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal, addRecommendPayment }) => {
  const extraAmountValidation = {
    required: 'Extra Amount is required',
    minLength: {
      value: 1,
      message: 'validation.length',
    },
    maxLength: {
      value: 254,
      message: 'max - 254 letters',
    },
  };

  const {
    register,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ extraAmount: null });
    }
  }, [formState]);

  const onKeyDown = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
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

    reset();
  };

  // return createPortal(
  return (
    <div className={s.overlay} onClick={onBackdropClick}>
      <form className={s.modal} onSubmit={handleSubmit(onSubmit)}>
        <button type="button" onClick={() => closeModal()} className={s.close}>
          <Close />
        </button>
        <h2 className={s.title}>Recommend extra payment</h2>
        <label htmlFor="" className={s.label}>
          Extra payment amount <br />
          <input
            type="text"
            placeholder="Enter amount"
            className={s.input}
            name="extraPayment"
            {...register('extraPayment', extraAmountValidation)}
          />
          {errors.extraPayment && (
            <ErrorMsg message={errors.extraPayment.message} />
          )}
        </label>
        <button type="submit" className={s.btn}>
          Recommend extra payment
        </button>
      </form>
    </div>
    // ,
    // modalRoot
  );
};

export default Modal;
