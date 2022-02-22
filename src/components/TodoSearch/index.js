import React from "react";

function TodoSearch({ search, setSearch, loading }) {  
  const handlerSearch = e => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <input 
        className={`container__search ${!!loading && 'loading'}`}
        type="search" 
        placeholder="Picar tomate" 
        value={search}
        disabled={loading}
        onChange={handlerSearch} />
    </div>
  )
}

export default TodoSearch;