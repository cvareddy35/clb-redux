import React, { Component } from 'react'

class TodoForm extends Component {
  state = {
    newTodoText: ''
  }

  handleChange = (evt) => {
    //console.log('value changing', evt.target.value);
    this.setState({
      newTodoText: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state.newTodoText);
    this.props.addTodo(this.state.newTodoText);
    this.setState({
      newTodoText: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
          <label>Enter todo text</label>
          <input type="text" 
                  value={this.state.newTodoText}
                  onChange={this.handleChange} />
        </div>
        <button className="ui blue basic button">Add Todo</button>
      </form>
    )
  }
}

export default TodoForm;
