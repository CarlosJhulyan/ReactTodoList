import React, { useState } from "react";

function TodoForm({ setVisibleModal, saveTodos, todos }) {
  const [valueInput, setValueInput] = useState("");
  const newTodos = [...todos]

  const handleHideModal = () => setVisibleModal(visible => !visible);

  const handleAddTodo = () => {
    const data = {
      text: valueInput,
      completed: false,
    }
    newTodos.push(data);
    saveTodos(newTodos);
    handleHideModal();
  }

  return (
    <form className="form">
      <label className="form__label">Nuevo TODO</label>
      <textarea className="form__input"
                type="text"
                rows="6"
                value={valueInput}
                onChange={e => setValueInput(e.target.value)}
                placeholder="Cocinar el cerdo 30 min">
      </textarea>
      <button className="form__cancel" type="button" onClick={handleHideModal}>Cancelar</button>
      <button className="form__add" type="submit" onClick={handleAddTodo}>Agregar</button>
    </form>
  )
}

export default TodoForm;