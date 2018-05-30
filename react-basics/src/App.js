import React, { Component } from 'react';
import TodoItem from './components/todos/todo-item';
import Counter from './components/counter';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Training</h1>
        <TodoItem />
        <Counter initialCount={567} />
      </div>
    );
  }
}

export default App;

