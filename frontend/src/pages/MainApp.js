import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import AppLoader from '../components/app_loader/AppLoader';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnAuthenticatedApp = React.lazy(() => import('./UnAuthenticatedApp'));

const MainApp = () => {
  const { user } = useUser();
  if (user.isFetching === true) {
    return <AppLoader />
  }
  // TODO add AppLoader

  return (
    <React.Suspense  fallback={<AppLoader />}>
      <Router>
        {user.isAuth ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </Router>
    </React.Suspense>
  ) 
}

export default MainApp;
