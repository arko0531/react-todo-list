import React from 'react'
import '../css/TodoList.css'
import TodoListItem from './TodoListItem'

const TodoList = (props) => {
  const {todos, onToggleTodo} = props;

  return (
    <div>
        <h3>Todo List</h3>
        <div className='listWrapper'>
            {todos.map((todo) => {
              return (
                <TodoListItem 
                  key={todo.id}
                  todo={todo}
                  onToggleTodo={onToggleTodo}
              />
              );
            })}
        </div>
    </div>
  )
}

export default TodoList