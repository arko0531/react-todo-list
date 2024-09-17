import React from 'react'
import Button from './ui/Button'
import '../css/TodoListItem.css'

const TodoListItem = () => {
  return (
    <div className='TodoListItem'>
        <div className='checkbox_wrapper'>
            <input type= 'checkbox'></input>
        </div>
        <div className='content'>할 일 적기</div>
        <Button 
            title = '삭제'
            // onClick = {() => {

            // }}
        />
    </div>
  )
}

export default TodoListItem