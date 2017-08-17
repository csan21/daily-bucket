import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import rlogo from './rlogo.svg';
import flogo from './flogo.svg';
import './App.css';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });
    });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={rlogo} className="App-logo" alt="logo" />
          <img src={flogo} className="App-logo" alt="logo" />
          <div className="App-title">
            <h1>Daily Bucket</h1>
          </div>
          <div>
            {!currentUser && <SignIn />}
            {currentUser && <CurrentUser user={currentUser} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
