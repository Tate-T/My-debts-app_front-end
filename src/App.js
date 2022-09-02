import './App.css';
import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = lazy(() => import('./components/Container/Container.jsx'));
const MyDebtsPage = lazy(() => import('./pages/MyDebtsPage/MyDebtsPage.jsx'));
const AddDebtPage = lazy(() => import('./pages/AddDebtPage/AddDebtPage.jsx'));
const DebtDetailsPage = lazy(() => import('./pages/DebtDetailsPage/DebtDetailsPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundViews/NotFoundViews.jsx'));

function App() {
  return (
    <Container>

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
