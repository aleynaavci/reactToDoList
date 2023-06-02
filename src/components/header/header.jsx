import React from 'react'
import { useState } from 'react';

function Header({setTodos, todos}) {

    const [todoValue, setTodoValue]= useState(""); 
    const handleSubmit =(e)=>{
      if (e && e.preventDefault) { e.preventDefault(); }
      if(todoValue===''){
        alert("please enter to-do")
      } else {
      setTodos([...todos, todoValue])
      }
    }

  return (
    <div className='todoapp'>
      <h1>todos</h1>
        <form>
        <label>
        <input 
            className='new-todo'
            placeholder='What needs to be done?'
            type="text" 
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
            autoFocus
        />
        <button
        onClick={(e)=>{
          e.preventDefault()
          handleSubmit()
          setTodoValue('')}}></button>
        </label>
        </form>
        <div className="main"> 
        <input className="toggle-all" type="checkbox"/>
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>
        </div>
    </div>

  )
}

export default Header;