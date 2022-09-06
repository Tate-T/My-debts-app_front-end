// import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { addDebt } from '../../redux/debtsOperations';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';
import s from './AddDebtPage.module.scss';

export default function AddDebtPage() {
  const dispatch = useDispatch();

  const borrowerNameValidation = {
    required: 'Borrower name is required',
    minLength: {
      value: 5,
      message: 'validation.length',
    },
    maxLength: {
      value: 254,
      message: 'max - 254 letters',
    },
  };

  const borrowerPhoneValidation = {
    required: 'Borrower phone is required',
    minLength: {
      value: 10,
      message: 'validation.length',
    },
    maxLength: {
      value: 254,
      message: 'max - 254 letters',
    },
  };

  const debtNameValidation = {
    required: 'Debt name is required',
    minLength: {
      value: 1,
      message: 'validation.length',
    },
    maxLength: {
      value: 254,
      message: 'max - 254 letters',
    },
  };

  const outstandingAmountValidation = {
    required: 'Outstanding amount is required',
    minLength: {
      value: 1,
      message: 'validation.length',
    },
    maxLength: {
      value: 254,
      message: 'max - 254 letters',
    },
  };

  const interestRateValidation = {
    required: 'Interest rate is required',
    minLength: {
      value: 1,
      message: 'validation.length',
    },
    maxLength: {
      value: 254,
      message: 'max - 254 letters',
    },
  };

  const minimalPaymentValidation = {
    required: 'Minimal payment is required',
    minLength: {
      value: 1,
      message: 'validation.length',
    },
    maxLength: {
      value: 254,
      message: 'max - 254 letters',
    },
  };

  const { register, handleSubmit, formState, reset } = useForm();

  const { errors } = formState;

  const onSubmit = debt => {
    dispatch(addDebt(debt));

    reset();
  };

  return (
    <div>
      <NavLink exact to="/" className={s.navLink} activeClassName="activeLink">
        &#8701; Go Back
      </NavLink>
      <h2 className={s.mainTitle}>Add a Debt</h2>
      <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form}>
          <h3 className={s.title}>Borrower</h3>
          <label htmlFor="" className={s.label}>
            {' '}
            Borrower name <br />
            <input
              type="text"
              placeholder="Enter name"
              className={s.input}
              name="borrowerName"
              {...register('borrowerName', borrowerNameValidation)}
            />
          </label>
          {errors.borrowerName && (
            <ErrorMsg message={errors.borrowerName.message} />
          )}
          <br />
          <label htmlFor="" className={s.label}>
            Borrower phone <br />
            <input
              type="text"
              placeholder="Enter phone number"
              className={s.input}
              name="borrowerPhone"
              {...register('borrowerPhone', borrowerPhoneValidation)}
            />
          </label>
          {errors.borrowerPhone && (
            <ErrorMsg message={errors.borrowerPhone.message} />
          )}
        </div>
        <div className={s.form}>
          <h3 className={s.title}>Debt</h3>
          <label htmlFor="" className={s.label}>
            Debt name <br />
            <input
              type="text"
              placeholder="Enter name"
              className={s.input}
              name="debtName"
              {...register('debtName', debtNameValidation)}
            />
          </label>
          {errors.debtName && <ErrorMsg message={errors.debtName.message} />}
          <br />
          <label htmlFor="" className={s.label}>
            Outstanding amount <br />
            <input
              type="text"
              placeholder="Enter amount"
              className={s.input}
              name="outstandingAmount"
              {...register('outstandingAmount', outstandingAmountValidation)}
            />
          </label>
          {errors.outstandingAmount && (
            <ErrorMsg message={errors.outstandingAmount.message} />
          )}
          <br />
          <label htmlFor="" className={s.label}>
            Interest rate <br />
            <input
              type="text"
              placeholder="Enter"
              className={s.input}
              name="debinterestRatetName"
              {...register('interestRate', interestRateValidation)}
            />
          </label>
          <br />
          {errors.interestRate && (
            <ErrorMsg message={errors.interestRate.message} />
          )}
          <label htmlFor="" className={s.label}>
            Minimal payment <br />
            <input
              type="text"
              placeholder="Enter amount"
              className={s.input}
              name="minimalPayment"
              {...register('minimalPayment', minimalPaymentValidation)}
            />
          </label>
          {errors.minimalPayment && (
            <ErrorMsg message={errors.minimalPayment.message} />
          )}
        </div>
        <button type="submit" className={s.btn}>
          Add debt
        </button>
      </form>
    </div>
  );
}
