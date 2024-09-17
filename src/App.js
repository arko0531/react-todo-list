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
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    }));
  };

  return (
    <div className='Wrapper'>
      <div><Header /></div>
      <div><TodoWrite onAddTodo = {onAddTodo}/></div>
      <div><TodoList todos = {todos} onToggleTodo = {onToggleTodo}/></div>
    </div>
  );
}

export default App;
