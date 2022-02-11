import React from "react";

import TodoCounter from '../components/TodoCounter';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import CreateTodoButton from '../components/CreateTodoButton';
import Modal from "../components/Modal";
import TodoForm from "../components/TodoForm";

import { TodoContext } from '../TodoContext';

function AppUI() {
  return(
    <div className='container'>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        <TodoContext.Consumer>
          {({ loading, handleCompleteTodos, handleDeleteTodo, filterTodos }) => (
            loading ? <div className="loader">Loading...</div> : filterTodos.map((todo, key) => 
            <TodoItem key={key} {...todo} 
                      handleCompleteTodos={handleCompleteTodos}
                      handleDeleteTodo={handleDeleteTodo} />)
          )
          }
        </TodoContext.Consumer>
      </TodoList>

      <TodoContext.Consumer>
        {({ visibleModal, setVisibleModal }) => (
          <Modal>
            {!!visibleModal &&
              <div className="background-modal">
                <TodoForm />
              </div>
            }
        </Modal>
        )}
        
      </TodoContext.Consumer>

      <CreateTodoButton />
    </div>
  )
}

export default AppUI;