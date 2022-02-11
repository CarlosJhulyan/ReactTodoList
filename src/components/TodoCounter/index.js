import React from "react";

import { TodoContext } from '../../TodoContext'

function TodoCounter() {
  return (
    <TodoContext.Consumer>
    {
      ({ completedTodos, totalTodos }) => (
        <h2 className="container__title">Haz completado {completedTodos} de {totalTodos} TODO's</h2>
      )}
    </TodoContext.Consumer>
  )
}

export default TodoCounter;