import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnAuthenticatedApp = React.lazy(() => import('./UnAuthenticatedApp'));

const App = () => {
  const { user } = useUser();
  // TODO add AppLoader

  return (
    <React.Suspense >
      <Router>
        {user.isAuth ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </Router>
    </React.Suspense>
  ) 
}

export default App;
