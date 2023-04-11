import React from 'react'
import { useState } from 'react';

function Header() {
    const [text, setText] = useState("");
    //const onSubmit =
  return (
    <div className='todoapp'>
      <h1>todos</h1>
        <form>
        <label>
        <input 
            className='new-todo'
            placeholder='What needs to be done?'
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
        />
        </label>
        </form>
    </div>

  )
}

export default Header;