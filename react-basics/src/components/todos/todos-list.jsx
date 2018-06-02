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
    ],
    newTodoText: ''
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Form submission: ', this.state.newTodoText);
    let newTodo = {};
    newTodo.id = this.state.todos.length + 1;
    newTodo.text = this.state.newTodoText;
    
    let newList = [...this.state.todos, newTodo];
    this.setState({
      todos: newList,
      newTodoText: ''
    });
  }

  handleChange = (evt) => {
    //console.log('value changing', evt.target.value);
    this.setState({
      newTodoText: evt.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>
          List of Todos
        </h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
                 value={this.state.newTodoText}
                 onChange={this.handleChange} />

          <button>Add Todo</button>
        </form>
        <ul className="ui list">
          {/* {this.state.todos.map(todo => <li key={todo.id}>{todo.id} - {todo.text}</li>)} */}
          {this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        
        </ul>
        
      </div>
    )
  }

}

export default TodosList;