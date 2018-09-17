import React from 'react';
import '../assets/stylesheets/css/TodoTemplate.css';
import Form from './Form';
import TodoItemList from './TodoItemList';

const TodoTemplate = () => {
  return (
    <div className="todo-list-template">
      <div className="title">Todo List</div>
      <div className="form-wrapper">
        <Form />
      </div>
      <div className="todos-wrapper">
        <TodoItemList />
      </div>
    </div>
  );
};

export default TodoTemplate;
