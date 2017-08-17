import React, { Component } from 'react';
import rlogo from './images/rlogo.svg';
import flogo from './images/flogo.svg';
import './styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={rlogo} className="app-logo" alt="logo" />
          <img src={flogo} className="app-logo" alt="logo" />
          <div className="app-title">
            <h1>Daily Bucket</h1>
          </div>
        </div>
        <div className="app-intro">Hello WORLD!</div>
      </div>
    );
  }
}

export default App;
