import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import ChoreNew from './ChoreNew';
import ChoreList from './ChoreList';
import rlogo from './rlogo.svg';
import flogo from './flogo.svg';
import './App.css';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      chores: null
    };
    this.choreRef = database.ref('/chores');
  }

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({
        currentUser: currentUser
      });
      this.choreRef.on('value', snapshot => {
        this.setState({ chores: snapshot.val() });
      });
    });
  }

  render() {
    const { currentUser, chores } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={rlogo} className="App-logo" alt="logo" />
          <img src={flogo} className="App-logo" alt="logo" />
          <div className="App-title">
            <h1>Daily Bucket</h1>
          </div>
        </div>
        <div className="App-intro">
          {!currentUser && <SignIn />}
          {currentUser &&
            <div>
              <ChoreList chores={chores} user={currentUser} />
              <CurrentUser user={currentUser} />
              <ChoreNew />
            </div>}
        </div>
      </div>
    );
  }
}

export default App;
