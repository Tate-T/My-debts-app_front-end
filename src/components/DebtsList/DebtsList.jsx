import { useState } from 'react';
import { ReactComponent as Bell } from '../../images/bell.svg';
import { ReactComponent as Plus } from '../../images/plus.svg';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Modal from '../Modal/Modal';
import s from './DebtsList.module.scss';

const DebtsList = ({ debts }) => {
  // const { borrowerName, minPayment, amount, name } = debts;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const notifyMessage = () => {
    // const message = Notify.warning(`Hey ${borrowerName}!

    // You have an outstanding amount of ${amount} for ${name}.

    // Please don't forget to pay your minimum monthly payment of ${minPayment}/month.`);
    const message = Notify.warning(`Hey ! 

    You have an outstanding amount .
    
    Please don't forget to pay your minimum monthly payment /month.`);
    return message;
  };

  return (
    <>
      <ul className={s.debtsList}>
        {debts.map(debt => (
          <li key={debt.id} className={s.debtCard}>
            <div className={s.titleBtnDirection}>
              <h2 className={s.debtTitle}>{debts.title}</h2>
              <button type="button" className={s.debtBtn} onClick={toggleModal}>
                <Plus className={s.bell} /> Extra payment
              </button>
              <button className={s.debtBtn} onClick={notifyMessage}>
                <Bell className={s.bell} />
                Notify
              </button>
            </div>
            <h3 className={s.debterName}>{debts.name}</h3>
            <p className={s.debtDescr}>
              Outstanding amount:
              <span className={s.debtAmount}>{debts.amount}</span>
            </p>
            <p className={s.debtDescr}>
              Minimal payment:
              <span className={s.debtAmount}>{debts.payment}/month</span>
            </p>
            <p className={s.debtDescr}>
              Interest rate: <span className={s.debtAmount}>{debts.rate}%</span>
            </p>
          </li>
        ))}

        <li className={s.debtCard}>
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
        </li>
        <li className={s.debtCard}>
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
        </li>
        <li className={s.debtCard}>
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
        </li>
      </ul>

      {isOpenModal && <Modal closeModal={toggleModal} />}
    </>
  );
};

export default DebtsList;
