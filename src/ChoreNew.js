import React, { Component, PropTypes } from 'react';
import { database } from './firebase';
import './ChoreNew.css';

class ChoreNew extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };

    this.choresRef = database.ref('/chores');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.choresRef.push({ name: this.state.name });
    this.setState({ name: '' });
  }

  render() {
    const { name } = this.state;

    return (
      <form className="ChoreNew">
        <input
          type="text"
          value={name}
          placeholder="Add a chore"
          onChange={event => this.setState({ name: event.target.value })}
        />
        <button onClick={this.handleSubmit} disabled={!name}>
          Add
        </button>
      </form>
    );
  }
}

ChoreNew.propTypes = {
  choresRef: PropTypes.object
};

export default ChoreNew;
