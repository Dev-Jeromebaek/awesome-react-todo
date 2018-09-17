import React, { Component } from 'react';
import '../assets/stylesheets/css/TodoItem.css';

class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        <div className="remove">&times;</div>
        <div>item</div>
      </div>
    );
  }
}

export default TodoItem;
