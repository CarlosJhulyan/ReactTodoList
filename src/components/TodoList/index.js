import React from "react";

function TodoList(props) {
  return (
    <section className="container-list">
      {props.loading && props.onLoading()}

      {(!props.loading &&
        !props.searchedTodos.length &&
        props.totalTodos === 0) && props.onEmptyTodos()}

      {(!props.loading &&
        props.totalTodos !== 0 && 
        !props.searchedTodos.length) && props.onEmptySearch(props.searchText)}

      {props.searchedTodos.map(props.render)}
    </section>
  )
}

export default TodoList;