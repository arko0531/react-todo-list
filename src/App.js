import './App.css';
import Header from './components/Header';
import TodoWrite from './components/TodoWrite';
import TodoList from './components/TodoList';
import React, {useState, useRef} from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const idRef = useRef(1);

  const onAddTodo = (text) => {
    const newTodo = {
      id : idRef.current,
      isDone : false,
      content : text,
      todoToday : new Date().toLocaleDateString()
    }
    idRef.current += 1;
    setTodos([...todos, newTodo]);
  }

  const onToggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id 
      ? {...todo, isDone : !todo.isDone} 
      : todo));
  };

  const onDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className='Wrapper'>
      <div><Header /></div>
      <div><TodoWrite onAddTodo = {onAddTodo}/></div>
      <div><TodoList todos = {todos} onToggleTodo = {onToggleTodo} onDeleteTodo = {onDeleteTodo}/></div>
    </div>
  );
}

export default App;
