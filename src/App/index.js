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
      <TodoHeader>
        <TodoCounter 
          completedTodos={completedTodos} 
          totalTodos={totalTodos} />

        <TodoSearch 
          search={search} 
          setSearch={setSearch} />
      </TodoHeader>
      
      <TodoList>
        {
          !!loading ? 
          <div className="loader">Loading...</div> : 
          filterTodos.map((todo, key) => 
          <TodoItem 
            key={key} {...todo}
            handleCompleteTodos={handleCompleteTodos}
            handleDeleteTodo={handleDeleteTodo} />)
        }
      </TodoList>

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
