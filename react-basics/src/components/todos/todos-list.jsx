import React, { Component } from 'react';
import TodoItem from './todo-item';

class TodosList extends Component {
  state = {
    todos: [
      {
        id: 1,
        text: 'Learn React.js'
      },
      {
        id: 2,
        text: 'Go to Gym'
      },
      {
        id: 3,
        text: 'Learn djembes'
      }
    ]
  }

  render() {
    return (
      <div>
        <h3>
          List of Todos
        </h3>
        <ul className="ui list">
          {this.state.todos.map(todo => <li key={todo.id}>{todo.id} - {todo.text}</li>)}
        </ul>
        
      </div>
    )
  }

}

export default TodosList;