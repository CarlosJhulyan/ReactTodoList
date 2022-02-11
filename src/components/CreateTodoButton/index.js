import React, { useContext } from "react";

import { TodoContext } from '../../TodoContext';

function CreateTodoButton() {
  const { setVisibleModal } = useContext(TodoContext);
  
  const handleShowModal = () => setVisibleModal(visible => !visible)

  return (
    <button onClick={handleShowModal} className="container__button" type="button"><i className="fa fa-plus" /></button>
  )
}

export default CreateTodoButton;
