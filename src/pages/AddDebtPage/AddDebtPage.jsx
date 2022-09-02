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
      <form className={s.form}>
        <h3 className={s.title}>Borrower</h3>
        <label htmlFor="">
          {' '}
          Borrower name
          <input type="text" placeholder="Enter name" />
        </label>
        <label htmlFor="">
          Borrower phone
          <input type="text" placeholder="Enter phone number" />
        </label>

        <h3 className={s.title}>Debt</h3>
        <label htmlFor="">
          Debt name
          <input type="text" placeholder="Enter name" />
        </label>
        <label htmlFor="">
          Outstanding amount
          <input type="text" placeholder="Enter amount" />
        </label>
        <label htmlFor="">
          Interest rate
          <input type="text" placeholder="Enter" />
        </label>
        <label htmlFor="">
          Minimal payment
          <input type="text" placeholder="Enter amount" />
        </label>
        <button type="sunbmit" className={s.btn}>
          Add debt
        </button>
      </form>
    </div>
  );
}
