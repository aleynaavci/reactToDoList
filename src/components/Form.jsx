import React from 'react'
import {useState} from 'react'

function Form() {
  const[ title, setTitle] = useState('');

  const handleSubmit = (e)=> {
    e.preventDefault();
  }
  return (
    <form>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus value={title} onChange={(e) => setTitle(e.target.value)}/>
    </form>
  )
}

export default Form