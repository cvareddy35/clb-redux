import React, { Component } from 'react';
import TodoItem from './todo-item';
import TodoForm from './todo-form';

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
    latestId: 4
  }

  addTodo = (newTodoText) => {

    let newTodo = {};
    newTodo.id = this.state.latestId;
    newTodo.text = newTodoText;
    
    let newList = [...this.state.todos, newTodo];
    this.setState({
      todos: newList,
      latestId: this.state.latestId + 1
    });
  }

  deleteTodo = (id) => {
    console.log('Delete method calle with id : ', id);
    let todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <h3>
          List of Todos
        </h3>
        
        <TodoForm addTodo={this.addTodo} />

        <ul className="ui list">
          {/* {this.state.todos.map(todo => <li key={todo.id}>{todo.id} - {todo.text}</li>)} */}
          {this.state.todos.map(todo => <TodoItem 
                                          key={todo.id} 
                                          todo={todo} 
                                          deleteTodo={this.deleteTodo}
                                        />
                                )}
        
        </ul>
        
      </div>
    )
  }

}

export default TodosList;