import React, { Component } from 'react'
import { connect } from 'react-redux';

class TodosList extends Component {
  render() {
    return (
      <div className="ui grid">
        <div className="six wide column">
          <h3>List of Todos</h3>
          <div className="ui selection aligned list">
            {
              this.props.todos.map(todo => <li key={todo.id}>{todo.id}-{todo.text}</li>)
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