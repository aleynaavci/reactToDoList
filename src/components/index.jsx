import '../App.css'
import Header from './header/header.jsx'
import { useState } from 'react';
import List from './list/list.jsx'
import Footer from './footer/footer.jsx'

function App() {
  const [todos, setTodos] = useState(['a', 'b', 'c']);
  /*const [todos, setTodos] = useState([
    { id: "todo-0", name: "Learn JavaScript", completed: true },
    { id: "todo-1", name: "Learn React", completed: false },
    { id: "todo-2", name: "Have a life!", completed: false }
  ]);*/

  const deleteTodo=(id)=>{
    setTodos(todos.filter((todo,index)=>index!==id))  
  }
  
    return (
      <div className="App">
        <Header setTodos ={setTodos} todos ={todos}/>  
        <List todos={todos} deleteTodo={deleteTodo}/>
        <Footer/>
      </div>
    );
  }
  
  export default App;