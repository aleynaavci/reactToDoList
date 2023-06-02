import React from 'react'
import Item from './item'

const list = ({todos}) => {
  return (
    <section className="main">
    <ul className="todo-list">
        {todos?.map((todo,index)=>{
        <Item id={index} todo={todo} key={index}/>
})}
    </ul>
    </section>
  )
}

export default list