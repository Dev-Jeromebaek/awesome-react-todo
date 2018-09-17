import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    return (
      <div>
        <TodoItem />
        <TodoItem />
      </div>
    );
  }
}

export default TodoItemList;
