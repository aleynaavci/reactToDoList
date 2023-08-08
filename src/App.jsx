import './App.css';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Main from './components/Main';
import { TodoProvider } from './contexts/TodoContext';

function App() {
  return (
    <TodoProvider>
    <section className="todoapp">
      <Header/>
      <Main/>
    </section>
    <Footer/>
    </TodoProvider>
  );
}

export default App;