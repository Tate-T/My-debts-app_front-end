import { useState } from 'react';
import { ReactComponent as Bell } from '../../images/bell.svg';
import { ReactComponent as Plus } from '../../images/plus.svg';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { reminderNotify } from '../../services/debtsAPI';
import Modal from '../Modal/Modal';
import s from './DebtsList.module.scss';

const DebtsList = ({ debts }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const notifyMessage = () => {
    const message = Notify.warning(`Hey ${debts.debt.borrowerName}!

    You have an outstanding amount of ${debts.debt.outstandingAmount} for ${debts.debt.debtName}.

    Please don't forget to pay your minimum monthly payment of ${debts.debt.minimalPayment}/month.`);

    reminderNotify();
    return message;
  };

  return (
    <>
      <ul className={s.debtsList}>
        {debts?.map(debt => (
          <li key={debt.debtName} className={s.debtCard}>
            <div className={s.titleBtnDirection}>
              <h2 className={s.debtTitle}>{debt.debtName}</h2>
              <button type="button" className={s.debtBtn} onClick={toggleModal}>
                <Plus className={s.bell} /> Extra payment
              </button>
              <button className={s.debtBtn} onClick={notifyMessage}>
                <Bell className={s.bell} />
                Notify
              </button>
            </div>
            <h3 className={s.debterName}>{debt.borrowerName}</h3>
            <p className={s.debtDescr}>
              Outstanding amount:
              <span className={s.debtAmount}>{debt.outstandingAmount}</span>
            </p>
            <p className={s.debtDescr}>
              Minimal payment:
              <span className={s.debtAmount}>{debt.minimalPayment}/month</span>
            </p>
            <p className={s.debtDescr}>
              Interest rate: <span className={s.debtAmount}>{debt.rate}%</span>
            </p>
          </li>
        ))}

        {/* <li className={s.debtCard}>
          <div className={s.titleBtnDirection}>
            <h2 className={s.debtTitle}>Car loan</h2>
            <button type="button" className={s.debtBtn} onClick={toggleModal}>
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
        </li> */}
      </ul>

      {isOpenModal && <Modal closeModal={toggleModal} />}
    </>
  );
};

export default DebtsList;
