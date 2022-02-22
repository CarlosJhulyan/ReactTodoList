import React from "react";

function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <div>
      <h2 className={`container__title ${loading && 'loading'}`}>
        Haz completado {completedTodos} de {totalTodos} TODO's
      </h2>
    </div>
  )
}

export default TodoCounter;