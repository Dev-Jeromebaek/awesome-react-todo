import React from 'react';
import '../assets/stylesheets/css/TodoTemplate.css';

const TodoTemplate = ({ form, children, palette }) => {
  return (
    <div className="todo-list-template">
      <div className="title">Todo List</div>
      <div className="palette-wrapper">{palette}</div>
      <div className="form-wrapper">{form}</div>
      <div className="todos-wrapper">{children}</div>
    </div>
  );
};

export default TodoTemplate;
