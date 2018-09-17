import React from 'react';
import '../assets/stylesheets/css/TodoTemplate.css';

const TodoTemplate = ({ form, children }) => {
  return (
    <div className="todo-list-template">
      <div className="title">Todo List</div>
      <div className="form-wrapper">{form}</div>
      <div className="todos-wrapper">{children}</div>
    </div>
  );
};

export default TodoTemplate;
