import React from "react";

function TodoList(props) {
  return (
    <section className="container-list">
      {props.children}
    </section>
  )
}

export default TodoList;