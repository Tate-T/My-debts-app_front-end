import { useState, useEffect } from 'react';
// import DebtsList from '../components/DebtsList/DebtsList';
// import fetches from '../services/debtsAPI';

export default function MyDebtsPage() {
  const [debts, setDebts] = useState([]);

  useEffect(() => {
    // fetches.fetchDebts().then(res => setDebts(res.results));
  }, []);

  return (
    <div>
      <h1>My debts</h1>
      {/* <DebtsList debts={debts} /> */}
    </div>
  );
}
