import React, { Component } from 'react';
import rlogo from './rlogo.svg';
import flogo from './flogo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={rlogo} className="App-logo" alt="logo" />
          <img src={flogo} className="App-logo" alt="logo" />
          <div className="App-title">
            <h1>To Do List in React + Firebase</h1>
          </div>
        </div>
        <p className="App-intro">content here!</p>
      </div>
    );
  }
}

export default App;
