import React, {
  Children,
  cloneElement
} from 'react'

function TodoHeader({ children, loading }) {
  return (
    <header className='TodoHeader'>
      {
        Children.toArray(children).map(child => 
          cloneElement(child, { loading }))
      }
    </header>
  );
}

export default TodoHeader;