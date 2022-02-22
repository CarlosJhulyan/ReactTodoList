import React from 'react';
import './index.css';

import TodoCounter from '../components/TodoCounter';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import CreateTodoButton from '../components/CreateTodoButton';
import Modal from "../components/Modal";
import TodoForm from "../components/TodoForm";
import TodoHeader from '../components/TodoHeader';

import useTodos from '../hooks/useTodos';
import EmpyTodos from '../components/EmptyTodos';

function App() {
  const {
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
  } = useTodos();

  return(
    <div className='container'>
      <TodoHeader loading={loading}>
        <TodoCounter 
          completedTodos={completedTodos} 
          totalTodos={totalTodos} />

        <TodoSearch 
          search={search} 
          setSearch={setSearch} />
      </TodoHeader>
      
      <TodoList
        loading={loading}
        searchedTodos={filterTodos}
        totalTodos={totalTodos}
        searchText={search}
        onLoading={() => <p>Cargando...</p>}
        onEmptyTodos={() => <EmpyTodos />}
        onEmptySearch={searchText => <p>No hay resultados para "{searchText}"</p>}
        render={todo => 
          <TodoItem 
            key={todo.text} {...todo}
            handleCompleteTodos={handleCompleteTodos}
            handleDeleteTodo={handleDeleteTodo} />} />

      <Modal>
        {!!visibleModal &&
          <div className="background-modal">
            <TodoForm 
              saveTodos={saveTodos} 
              todos={todos} 
              setVisibleModal={setVisibleModal} />
          </div>
        }
      </Modal>

      <CreateTodoButton setVisibleModal={setVisibleModal} />
    </div>
  )
}

export default App;
