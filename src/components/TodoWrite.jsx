import React, {useState, useRef} from 'react'
import '../css/TodoWrite.css'
import Button from './ui/Button'

const TodoWrite = (props) => {
  const {onAddTodo} = props;
  const [content, setContent] = useState('');
  const focusRef = useRef();

  const handleChangeContent = (event) => {
    setContent(event.target.value);
  }

  // 작성 버튼 함수
  const handleSubmit = () => {
    if (content) {
      onAddTodo(content);
      setContent('');
    } else 
      focusRef.current.focus();
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter')
      handleSubmit();
  }

  return (
    <div>
        <h3>Todo 작성</h3>
        <div className='WriteWrapper'>
            <input 
              type='text' 
              placeholder='Todo를 작성해주세요.' 
              value={content} 
              onChange={handleChangeContent} 
              ref={focusRef} 
              onKeyDown={handleKeyPress}>
            </input>
            <Button 
                title = '작성'
                onClick = {handleSubmit}
            />
        </div>
    </div>
  )
}

export default TodoWrite