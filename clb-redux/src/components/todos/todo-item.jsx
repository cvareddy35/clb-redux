import React from 'react'

const TodoItem = (props) => {
  return (
    <div className="item">
      <button className="ui basic red button">
        Delete
      </button>
      {props.todo.text}
    </div>
  )
}

export default TodoItem;