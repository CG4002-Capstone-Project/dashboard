import React from 'react';
import ReactDOM from 'react-dom';
import Register from './components/register/Register';
import CoachApp from './components/coach/CoachApp';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Register />
      {/* <CoachApp /> */}
      </React.Fragment>

    )
  }
}

export default App;
