import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import rlogo from './images/rlogo.svg';
import flogo from './images/flogo.svg';
import './styles/index.css';

var allItems = [];
allItems.push('Finish homework');
allItems.push('Code brains out');
allItems.push('Go to gym');
allItems.push('Dinner with parents');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems
    };

    this.addEvent = this.addEvent.bind(this);
  }
  render() {
    var items = this.props.items.map((item, i) => {
      return <li key={i}><TodoItem item={item} /></li>;
    });
    return (
      <div className="app">
        <Header />
        <div className="app-intro">
          <ul>{items}</ul>
          <section><NewTodoItem addEvent={this.addEvent} /></section>
        </div>
      </div>
    );
  }
  addEvent(todoItem) {
    allItems.push(todoItem.newItem);
    this.setState({ allItems });
  }
}

class TodoItem extends Component {
  render() {
    return <div>{this.props.item}</div>;
  }
}

class NewTodoItem extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.itemName).focus();
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input ref="itemName" type="text" placeholder="Add to your day" />
      </form>
    );
  }
  onSubmit(event) {
    event.preventDefault();
    var input = ReactDOM.findDOMNode(this.refs.itemName);
    var newItem = input.value;
    this.props.addEvent({ newItem });
    input.value = '';
  }
}

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <img src={rlogo} className="app-logo" alt="logo" />
        <img src={flogo} className="app-logo" alt="logo" />
        <div className="app-title">
          <h1>Daily Bucket</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App items={allItems} />, document.getElementById('root'));
