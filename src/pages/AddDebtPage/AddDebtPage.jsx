// import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from './AddDebtPage.module.scss';

export default function AddDebtPage() {
  return (
    <div>
      <NavLink exact to="/" className={s.navLink} activeClassName="activeLink">
        &#8701; Go Back
      </NavLink>
      <h2 className={s.mainTitle}>Add a Debt</h2>
      <form className={s.formContainer}>
        <div className={s.form}>
          <h3 className={s.title}>Borrower</h3>
          <label htmlFor="" className={s.label}>
            {' '}
            Borrower name <br />
            <input type="text" placeholder="Enter name" className={s.input} />
          </label>
          <br />
          <label htmlFor="" className={s.label}>
            Borrower phone <br />
            <input
              type="text"
              placeholder="Enter phone number"
              className={s.input}
            />
          </label>{' '}
        </div>
        <div className={s.form}>
          <h3 className={s.title}>Debt</h3>
          <label htmlFor="" className={s.label}>
            Debt name <br />
            <input type="text" placeholder="Enter name" className={s.input} />
          </label>{' '}
          <br />
          <label htmlFor="" className={s.label}>
            Outstanding amount <br />
            <input type="text" placeholder="Enter amount" className={s.input} />
          </label>{' '}
          <br />
          <label htmlFor="" className={s.label}>
            Interest rate <br />
            <input type="text" placeholder="Enter" className={s.input} />
          </label>{' '}
          <br />
          <label htmlFor="" className={s.label}>
            Minimal payment <br />
            <input type="text" placeholder="Enter amount" className={s.input} />
          </label>
        </div>
        <button type="submit" className={s.btn}>
          Add debt
        </button>
      </form>
    </div>
  );
}
