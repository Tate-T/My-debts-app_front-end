import './App.css';
import { lazy, Suspense } from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyDebtsPage = lazy(() => import('./pages/MyDebtsPage/MyDebtsPage.jsx'));
const AddDebtPage = lazy(() => import('./pages/AddDebtPage/AddDebtPage.jsx'));
const DebtDetailsPage = lazy(() => import('./pages/DebtDetailsPage/DebtDetailsPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundViews/NotFoundViews.jsx'));

function App() {
  return (
    <Container>

      <NavLink to="/addadebt" className="navLink" activeClassName="activeLink">AddDebt</NavLink>
      <NavLink exact to="/" className="navLink" activeClassName="activeLink">Go Back</NavLink>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <MyDebtsPage />
          </Route>

          <Route path="/addadebt" exact>
            <AddDebtPage />
          </Route>

          <Route path="/addadebt/debtId">
            <DebtDetailsPage />
          </Route>

          <Route path="/addadebt/debtId">
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </Container>
  );
}

export default App;
