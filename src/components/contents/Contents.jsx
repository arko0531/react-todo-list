import React, { useState } from 'react';
import TodoWrite from './TodoWrite';
import TodoList from './TodoList';

function Contents() {
    const [todos, setTodos] = useState([]);
    const [id, setId] = useState(1);

    // 작성
    const handleAddTodo = (text) => {
        const newTodo = {
            id,
            isDone: false,
            content: text,
            todoToday: new Date().toLocaleDateString()
        }
        setTodos((prev) =>[...prev, newTodo]);
        setId((prev) => prev + 1);
    }

    // 체크박스 변경
    const handleToggleTodo = (id) => {
        setTodos((prev) => prev.map(todo => todo.id === id
            ? { ...todo, isDone: !todo.isDone }
            : todo));
    };

    // 삭제
    const handleDeleteTodo = (id) => {
        setTodos((prev) => prev.filter(todo => todo.id !== id));
    }

    // 전체 삭제
    const handleDeleteTodoAll = () => {
        setTodos([]);
    }
    return (
        <>
            <div><TodoWrite onAddTodo={handleAddTodo} /></div>
            <div>
                <TodoList
                    todos={todos}
                    onToggleTodo={handleToggleTodo}
                    onDeleteTodo={handleDeleteTodo}
                    onDeleteTodoAll={handleDeleteTodoAll}
                />
            </div>
        </>
    )
}

export default Contents