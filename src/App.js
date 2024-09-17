import './App.css';
import Header from './components/Header';
import TodoWrite from './components/TodoWrite';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='Wrapper'>
      <div><Header /></div>
      <div><TodoWrite /></div>
      <div><TodoList /></div>
    </div>
  );
}

export default App;
