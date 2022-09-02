import { ReactComponent as Bell } from '../../images/bell.svg';
import { ReactComponent as Plus } from '../../images/plus.svg';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import s from './DebtsList.module.scss';

const DebtsList = ({
  debts,
  isOpenModal,
  borrowerName,
  minPayment,
  amount,
  name,
}) => {
  const notifyMessage = () => {
    const message = Notify.warning(`Hey ${borrowerName}! 

    You have an outstanding amount of ${amount} for ${name}.
    
    Please don't forget to pay your minimum monthly payment of ${minPayment}/month.`);

    return message;
  };

  return (
    <ul className={s.debtsList}>
      {debts.map(debt => (
        <li key={debt.id} className={s.debtCard}>
          <div className={s.titleBtnDirection}>
            <h2 className={s.debtTitle}>{debts.title}</h2>
            <button
              type="button"
              className={s.debtBtn}
              onClick={notifyMessage()}
            >
              <Plus className={s.bell} /> Extra payment
            </button>
            <button className={s.debtBtn}>
              <Bell className={s.bell} />
              Notify
            </button>
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
          <button type="button" className={s.debtBtn}>
            <Plus className={s.bell} /> Extra payment
          </button>
          <button className={s.debtBtn} onClick={notifyMessage}>
            <Bell className={s.bell} />
            Notify
          </button>
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
          <button type="button" className={s.debtBtn}>
            <Plus className={s.bell} /> Extra payment
          </button>
          <button className={s.debtBtn} onClick={notifyMessage}>
            <Bell className={s.bell} />
            Notify
          </button>
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
          <button type="button" className={s.debtBtn}>
            <Plus className={s.bell} /> Extra payment
          </button>
          <button className={s.debtBtn} onClick={notifyMessage}>
            <Bell className={s.bell} />
            Notify
          </button>
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
