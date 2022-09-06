import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DebtsList from '../../components/DebtsList/DebtsList';
import { fetchDebts } from '../../services/debtsAPI';
import s from './MyDebtsPage.module.scss';

export default function MyDebtsPage() {
  const [debts, setDebts] = useState([]);

  console.log(debts);

  useEffect(() => {
    fetchDebts().then(res => setDebts(res.results));
  }, []);

  return (
    <div className={s.debtsPage}>
      <div className={s.menu}>
        <h1 className={s.title}>My debts</h1>
        <NavLink
          to="/addadebt"
          className={s.navLink}
          activeClassName="activeLink"
        >
          Add Debt
        </NavLink>
      </div>
      <DebtsList debts={debts} />
    </div>
  );
}
