// import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function AddDebtPage() {
  return (
    <div>
      <NavLink exact to="/" className="navLink" activeClassName="activeLink">
        Go Back
      </NavLink>
      <h1>Add a Debt</h1>
    </div>
  );
}
