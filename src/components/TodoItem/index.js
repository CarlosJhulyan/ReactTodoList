import React from "react";

function TodoItem({ completed, text, handleCompleteTodos, handleDeleteTodo }) {
  return (
    <li className="container-list__item">
      <span className="fa fa-check" onClick={() => handleCompleteTodos(text)} />
      <p className={completed ? "completed" : ''}>{text}</p>
      <i className="fa fa-close" onClick={() => handleDeleteTodo(text)} />
    </li>
  )
}

export default TodoItem;