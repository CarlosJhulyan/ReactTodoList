import React from "react";

function TodoCounter({ completedTodos, totalTodos }) {
  return (
    <div>
      <h2 className="container__title">Haz completado {completedTodos} de {totalTodos} TODO's</h2>
    </div>
  )
}

export default TodoCounter;