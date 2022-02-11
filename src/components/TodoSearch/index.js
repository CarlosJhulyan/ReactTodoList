import React from "react";

function TodoSearch({ search, setSearch }) {  
  const handlerSearch = e => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <input className="container__search" type="search" placeholder="Picar tomate" value={search} onChange={handlerSearch} />
    </div>
  )
}

export default TodoSearch;