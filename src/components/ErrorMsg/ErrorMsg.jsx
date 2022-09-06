import s from './ErrorMsg.module.scss';

const ErrorMsg = ({ message = '' }) => {
  return <p className={s.error}>{message || 'Something went wrong'}</p>;
};

export default ErrorMsg;
