import React from 'react'
import '../css/TodoList.css'
import TodoListItem from './TodoListItem'

const TodoList = () => {
  return (
    <div>
        <h3>Todo List</h3>
        <div className='listWrapper'>
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    </div>
  )
}

export default TodoList