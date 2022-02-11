import React from "react";

import { TodoContext } from '../../TodoContext'

function TodoSearch() {  
  return (
    <TodoContext.Consumer>
      {({ search, setSearch }) => {
        const handlerSearch = e => {
          setSearch(e.target.value)
        }
        return (
          <input className="container__search" type="search" placeholder="Picar tomate" value={search} onChange={handlerSearch} />
        )
      }}
    </TodoContext.Consumer>
  )
}

export default TodoSearch;