import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = createContext();
const NAME_STORAGE = 'TODOS_V1';

function TodoProvider(props) {
  const { todos, saveTodos, loading } = useLocalStorage(NAME_STORAGE, []);
  const [search, setSearch] = useState("");
  const [visibleModal, setVisibleModal] = useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let filterTodos = [];

  if (!search.length >= 1) {
    filterTodos = todos;
  } else {
    filterTodos = todos.filter(todo => 
      todo.text.toLowerCase().includes(search.toLowerCase()));
  }

  const handleCompleteTodos = text => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[indexTodo].completed = !newTodos[indexTodo].completed;
    saveTodos(newTodos);
  }

  const handleDeleteTodo = text => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={{
      completedTodos,
      filterTodos,
      handleCompleteTodos,
      handleDeleteTodo,
      setSearch,
      totalTodos,
      loading,
      search,
      visibleModal,
      setVisibleModal,
      saveTodos,
      todos,
    }}>
      {
        props.children
      }
    </TodoContext.Provider>
  )
}

export {
  TodoContext,
  TodoProvider
}