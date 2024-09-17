import React from 'react'
import '../css/TodoList.css'
import TodoListItem from './TodoListItem'
import Button from './ui/Button'

const TodoList = (props) => {
  const {todos, onToggleTodo, onDeleteTodo, onDeleteTodoAll} = props;

  let todoControls = 'todoControls';
  if (todos.length > 0)
    todoControls = 'todoControls';
  else
    todoControls = 'todoControlsNone';

  const todoCount = () => {
    const notDoneCount = todos.filter((todo) => !(todo.isDone)).length; // 할 일 개수
    const doneCount = todos.filter((todo) => todo.isDone).length; // 완료된 개수
  
    return {notDoneCount, doneCount};
  }
  const { notDoneCount, doneCount } = todoCount();

  return (
    <div>
      <div>
        <h3>Todo List</h3>    
      </div>
      <div className={todoControls}>
        <div>
          <span className='countText'>할 일 개수 : {notDoneCount}개</span><br />
          <span className='countText'>완료된 개수 : {doneCount}개</span>
        </div>
        <Button
          title = '전체 삭제'
          onClick = {onDeleteTodoAll}
        />
      </div>
      <div className='listWrapper'>
        {todos.map((todo) => {
          return (
            <TodoListItem 
              key={todo.id}
              todo={todo}
              onToggleTodo={onToggleTodo}
              onDeleteTodo={onDeleteTodo}
            />
          );
        })}
      </div>
    </div>
  )
}

export default TodoList