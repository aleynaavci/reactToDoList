import React from 'react'

const Item = (todo, deleteTodo, id) => {
  return (
    <li className="completed">
        <div className="view">
        <input 
        property="done" 
        className="toggle" 
        type="checkbox"/>
        <label property="text">{todo}</label>
        <button 
        className="destroy" 
        mv-action="delete(todo)" 
        onClick= {() => {deleteTodo(id)
        }}></button>
		</div>
    </li>
  )
}

export default Item