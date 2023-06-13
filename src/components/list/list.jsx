import React from 'react'
import Item from './item'

const List = ({todos, deleteTodo}) => {
  return (
    <div className='todo-app'>
    <section className="main">
      <ul className="todo-list">
          {todos?.map((todo,index)=>{
            return(
          <Item id={index} todo={todo} key={index} deleteTodo={deleteTodo}/>
            );
        })}
      </ul>
      </section>
      </div>
  )
}

export default List