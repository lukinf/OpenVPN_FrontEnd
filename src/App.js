import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      login: {
        username: '',
        password: ''
      }
    }
  };

  render() {
    return (
      <Login />
      //<Login login={this.state.login} />
    )
  }
}

export default App;
