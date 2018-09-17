import React, { Component } from 'react';

import '../assets/stylesheets/css/style.css';
import TodoTemplate from './TodoTemplate';

class App extends Component {
  id = 1;

  state = {
    input: '',
    todos: [{ text: '리액트 Todo Project 만들기', checked: true, id: 0 }],
  };

  render() {
    return <TodoTemplate />;
  }
}

export default App;
