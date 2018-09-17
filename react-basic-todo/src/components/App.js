import React, { Component } from 'react';

import '../assets/stylesheets/css/style.css';
import TodoTemplate from './TodoTemplate';
import Form from './Form';
import TodoItemList from './TodoItemList';

class App extends Component {
  id = 1;

  state = {
    input: '',
    todos: [{ text: '리액트 Todo Project 만들기', checked: true, id: 0 }],
  };

  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createTodoOne = e => {
    // 페이지 리로딩 방지
    e.preventDefault();

    const { input, todos } = this.state;
    this.setState({
      input: '', // 입력 후 input 값 초기화 작업 진행
      todos: todos.concat({
        text: input,
        checked: false,
        id: this.id++,
      }),
    });
  };

  toggleChecked = id => {
    console.log('toggleChecked', id);
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체 확인
    const nextTodos = [...todos]; // 배열을 복사해서 nextTodos 라는 새로운 배열을 만듬.

    // 기존 값들을 복사한뒤, checked 값만 덮어씌워 변경
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    this.setState({
      todos: nextTodos,
    });
  };

  removeTodoOne = id => {
    console.log('removeTodoOne', id);
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id),
    });
  };

  render() {
    const { input, todos } = this.state;
    const { inputChange, createTodoOne, toggleChecked, removeTodoOne } = this;
    return (
      <TodoTemplate
        form={
          <Form value={input} onChange={inputChange} onCreate={createTodoOne} />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={toggleChecked}
          onRemove={removeTodoOne}
        />
      </TodoTemplate>
    );
  }
}

export default App;
