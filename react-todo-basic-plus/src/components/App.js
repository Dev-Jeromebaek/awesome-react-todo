import React, { Component } from 'react';

import '../assets/stylesheets/css/style.css';
import TodoTemplate from './TodoTemplate';
import Palette from './Palette';
import Form from './Form';
import TodoItemList from './TodoItemList';

import { colors } from './modules/colors';

class App extends Component {
  id = 1;

  state = {
    input: '',
    todos: [
      {
        text: '리액트 Todo Project 만들기',
        checked: true,
        color: '#FF4A52',
        id: 0,
      },
    ],
    color: '#343a40',
  };

  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createTodoOne = e => {
    // 페이지 리로딩 방지
    e.preventDefault();

    const { input, todos, color } = this.state;
    this.setState({
      input: '', // 입력 후 input 값 초기화 작업 진행
      todos: todos.concat({
        text: input,
        checked: false,
        id: this.id++,
        color,
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

  colorSelect = color => {
    this.setState({
      color,
    });
  };

  render() {
    const { input, todos, color } = this.state;
    const {
      inputChange,
      createTodoOne,
      toggleChecked,
      removeTodoOne,
      colorSelect,
    } = this;
    return (
      <TodoTemplate
        palette={
          <Palette colors={colors} selected={color} onSelect={colorSelect} />
        }
        form={
          <Form
            value={input}
            onChange={inputChange}
            onCreate={createTodoOne}
            color={color}
          />
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
