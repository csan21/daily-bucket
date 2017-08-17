import React, { Component } from 'react';
import { database } from './firebase';
import rlogo from './rlogo.svg';
import flogo from './flogo.svg';
import './App.css';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    database.ref('/').on('value', snapshot => {
      this.setState({
        data: snapshot.val()
      });
    });
  }

  handleChange(event) {
    const newData = event.target.value;
    this.setState({
      newData
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newData = database.ref().child('NEWNEW').push(this.state.newData);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={rlogo} className="App-logo" alt="logo" />
          <img src={flogo} className="App-logo" alt="logo" />
          <div className="App-title">
            <h1>Daily Bucket</h1>
          </div>
        </div>
        <pre className="App-intro">
          {JSON.stringify(this.state.data, 2)}
        </pre>
        <form className="App-form" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
