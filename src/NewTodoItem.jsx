import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NewTodoItem extends Component {
  constructor(props) {
    super(props);
    console.log(props, 'NEWTODO PROPS');

    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.itemName).focus();
  }
  render() {
    console.log(this);
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

export default NewTodoItem;
