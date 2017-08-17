import React, { Component } from 'react';
import { auth, provider } from '../firebase';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className="SignIn">
        <button onClick={() => auth.signInWithRedirect(provider)}>
          Sign in
        </button>
      </div>
    );
  }
}

export default SignIn;
