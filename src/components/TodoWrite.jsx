import React from 'react'
import '../css/TodoWrite.css'
import Button from './ui/Button'

const TodoWrite = () => {
  return (
    <div>
        <h3>Todo 작성</h3>
        <div className='WriteWrapper'>
            <input type='text' placeholder='Todo를 작성해주세요.'></input>
            <Button 
                title = '작성'
                // onClick = {() =>

                // }
            />
        </div>
    </div>
  )
}

export default TodoWrite