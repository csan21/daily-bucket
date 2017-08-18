import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import TodoItem from './TodoItem';
import NewTodoItem from './NewTodoItem';

import './styles/index.css';

var allItems = [];
allItems.push('Finish homework');
allItems.push('Code brains out');
allItems.push('Go to gym');
allItems.push('Dinner with parents');

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props, 'APP PROPS');

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

ReactDOM.render(<App items={allItems} />, document.getElementById('root'));
