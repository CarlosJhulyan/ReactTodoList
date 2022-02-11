import { useEffect, useState } from "react";

function UseLocalStorage(nameStorage, initialTodos) {
  const [todos, setTodos] = useState(initialTodos);
  const [loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const localstorageGetTodos = localStorage.getItem(nameStorage);
      let parsedTodos = [];
    
      if (localstorageGetTodos) {
        parsedTodos = JSON.parse(localStorage.getItem(nameStorage));
      } else {
        localStorage.setItem(nameStorage, JSON.stringify([]));
      }
  
      setTodos(parsedTodos);
      setLoading(false);
    }, 2000);
  });
  
  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem(nameStorage, JSON.stringify(newTodos));
  }

  return {
    todos,
    saveTodos,
    loading
  }
}

export default UseLocalStorage;