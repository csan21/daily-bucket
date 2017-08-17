import React, { Component } from 'react';
import { auth, AuthProvider } from './firebase';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <button onClick={() => auth.signInWithRedirect(AuthProvider)}>
          Sign in
        </button>
      </div>
    );
  }
}

export default SignIn;
