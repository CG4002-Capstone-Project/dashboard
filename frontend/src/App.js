import React from 'react';
import ReactDOM from 'react-dom';
import Register from './components/register/Register';
import Login from './components/login';
import CoachApp from './components/coach/CoachApp';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginAndRegisterNavBar from './components/navbars/login-register/LoginAndRegisterNavBar';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <BrowserRouter>
          <Route path="/" component={LoginAndRegisterNavBar} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </BrowserRouter> */}
      <CoachApp />

      </React.Fragment>


    )
  }
}

export default App;
