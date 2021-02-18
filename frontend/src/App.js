import React from 'react';
import ReactDOM from 'react-dom';
import Register from './components/register/Register';
import NewRegister from './components/new-register/Register';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      {/* <Register /> */}
      <NewRegister />
      </React.Fragment>

    )
  }
}

export default App;
