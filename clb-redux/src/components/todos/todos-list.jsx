import React, { Component } from 'react'
import { connect } from 'react-redux';
import TodoItem from './todo-item';
import TodoForm from './todo-form';

class TodosList extends Component {
  render() {
    return (
      <div className="ui grid">
        <div className="six wide column">
          <h3>List of Todos</h3>
          <TodoForm />
          <div className="ui selection aligned list">
            {
              this.props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
} 

export default connect(mapStateToProps)(TodosList);