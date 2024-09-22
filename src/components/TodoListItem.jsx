import React from 'react'
import Button from './ui/Button'
import '../css/TodoListItem.css'

const TodoListItem = (props) => {
  const {todo, onToggleTodo, onDeleteTodo} = props;

  const handleChange = () => {
    onToggleTodo(todo.id);
  }

  const handleDelete = () => {
    onDeleteTodo(todo.id);
  }

  const contentText = todo.isDone ? 'contentTextDone' : 'contentText';

  return (
    <div className='itemWrapper'>
        <div className='checkboxWrapper'>
            <input 
              type= 'checkbox' 
              checked={todo.isDone} 
              onChange={handleChange}>
            </input>
        </div>
        <div className={contentText}>{todo.content}</div>
        <div className='todayText'>{todo.todoToday}</div>
        <Button 
            title = '삭제'
            onClick = {handleDelete}
        />
    </div>
  )
}

export default TodoListItem