import s from './DebtsList.module.scss';

const DebtsList = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default DebtsList;
