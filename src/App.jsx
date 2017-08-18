import React, { Component } from 'react';
import List from './List';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: '',
      list: ['hello', 'nope']
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ item: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      list: this.state.list.concat(this.state.item)
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-intro">
          <form onSubmit={this.onSubmit}>
            <input
              value={this.state.item}
              onChange={this.onChange}
              type="text"
              placeholder="Add to your day"
            />
          </form>
          <List items={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;
