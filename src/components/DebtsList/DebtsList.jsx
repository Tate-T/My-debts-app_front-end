import { NavLink } from 'react-router-dom';
import { ReactComponent as Bell } from '../../images/bell.svg';
import s from './DebtsList.module.scss';

const DebtsList = ({ debts }) => {
  return (
    <ul className={s.debtsList}>
      {debts.map(debt => (
        <li key={debt.id} className={s.debtCard}>
          <div className={s.titleBtnDirection}>
            <h2 className={s.debtTitle}>{debts.title}</h2>
            <button type="button" className={s.debtBtn}>
              &plus; Extra payment
            </button>
            <NavLink
              to="/notify"
              className={s.debtBtn}
              activeClassName="activeLink"
            >
              <Bell className={s.bell} />
              Notify
            </NavLink>
          </div>
          <h3 className={s.debterName}>{debts.name}</h3>
          <p className={s.debtDescr}>
            Outstanding amount:{' '}
            <span className={s.debtAmount}>{debts.amount}</span>
          </p>
          <p className={s.debtDescr}>
            Minimal payment:{' '}
            <span className={s.debtAmount}>{debts.payment}</span>
          </p>
          <p className={s.debtDescr}>
            Interest rate: <span className={s.debtAmount}>{debts.rate}</span>
          </p>
        </li>
      ))}
      <li className={s.debtCard}>
        <div className={s.titleBtnDirection}>
          <h2 className={s.debtTitle}>Car loan</h2>
          <NavLink
            to="/notify"
            className={s.debtBtn}
            activeClassName="activeLink"
          >
            <Bell className={s.bell} />
            Notify
          </NavLink>
        </div>
        <h3 className={s.debterName}>John Doe</h3>
        <p className={s.debtDescr}>
          Outstanding amount: <span className={s.debtAmount}>$3452.29</span>
        </p>
        <p className={s.debtDescr}>
          Minimal payment: <span className={s.debtAmount}>$200/month</span>
        </p>
        <p className={s.debtDescr}>
          Interest rate: <span className={s.debtAmount}>6.25%</span>
        </p>
      </li>
      <li className={s.debtCard}>
        <div className={s.titleBtnDirection}>
          <h2 className={s.debtTitle}>Car loan</h2>
          <NavLink
            to="/notify"
            className={s.debtBtn}
            activeClassName="activeLink"
          >
            <Bell className={s.bell} />
            Notify
          </NavLink>
        </div>
        <h3 className={s.debterName}>John Doe</h3>
        <p className={s.debtDescr}>
          Outstanding amount: <span className={s.debtAmount}>$3452.29</span>
        </p>
        <p className={s.debtDescr}>
          Minimal payment: <span className={s.debtAmount}>$200/month</span>
        </p>
        <p className={s.debtDescr}>
          Interest rate: <span className={s.debtAmount}>6.25%</span>
        </p>
      </li>
      <li className={s.debtCard}>
        <div className={s.titleBtnDirection}>
          <h2 className={s.debtTitle}>Car loan</h2>
          <NavLink
            to="/notify"
            className={s.debtBtn}
            activeClassName="activeLink"
          >
            <Bell className={s.bell} />
            Notify
          </NavLink>
        </div>
        <h3 className={s.debterName}>John Doe</h3>
        <p className={s.debtDescr}>
          Outstanding amount: <span className={s.debtAmount}>$3452.29</span>
        </p>
        <p className={s.debtDescr}>
          Minimal payment: <span className={s.debtAmount}>$200/month</span>
        </p>
        <p className={s.debtDescr}>
          Interest rate: <span className={s.debtAmount}>6.25%</span>
        </p>
      </li>
    </ul>
  );
};

export default DebtsList;
