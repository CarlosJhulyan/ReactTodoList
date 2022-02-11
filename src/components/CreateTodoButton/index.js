import React from "react";

function CreateTodoButton({ setVisibleModal }) {  
  const handleShowModal = () => setVisibleModal(visible => !visible)

  return (
    <button onClick={handleShowModal} className="container__button" type="button"><i className="fa fa-plus" /></button>
  )
}

export default CreateTodoButton;
