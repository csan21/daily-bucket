import React, { Component } from 'react';
import { auth, database } from '../firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import ChoreNew from './ChoreNew';
import ChoreList from './ChoreList';
import rlogo from '../images/rlogo.svg';
import flogo from '../images/flogo.svg';
import '../styles/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      chores: null
    };
    this.choreRef = database.ref('/chores');
  }

  componentDidMount() {
    auth.onAuthStateChanged(function(currentUser) {
      if (currentUser) {
        console.log(currentUser);
        this.setState({ currentUser });
      } else {
        console.log('login fail');
      }

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
