import React from 'react';

const TodoItem = props => {
  console.log(props.item, 'TODOITEM PROPS');
  return <div>{props.item}</div>;
};

export default TodoItem;
