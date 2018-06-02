import React, { Component } from 'react';

export class TodoItem extends Component {
  
  render() {
    return (
      <h3>
        {this.props.todo.id} - { this.props.todo.text }
      </h3>
    )
  }
}

export default TodoItem; 