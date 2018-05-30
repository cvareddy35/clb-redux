import React, { Component } from 'react';
import Counter from './components/counter';
import TodosList from './components/todos/todos-list';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <h1>React Training</h1>
        <TodosList />
        {/* <Counter initialCount={567} /> */}
      </div>
    );
  }
}

export default App;

