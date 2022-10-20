import React, { useCallback, useRef, useState } from "react";
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
const TodoApp_gitInJun = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'TDD 배우기',
            done: false,
        },
        {
            id: 2,
            text: 'react-testing-library',
            done: true,
        }
    ]);
    const nextId = useRef(3);
    const onInsert = useCallback(text => {
        setTodos(
            todos.concat({
                id: nextId.current,
                text,
                done: false,
            })
        );
        nextId.current += 1;
    }, [todos]);
    const onToggle = useCallback(id => {
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo)
        );
    }, [todos]);
    const onRemove = useCallback(id => {
        setTodos(
            todos.filter(todo => todo.id !== id)
        );
    }, [todos]);
    return (<div>
    <h1>2022-10-20/16:59 Hello World!!!</h1>
    <TodoForm onInsert={onInsert}/>
    <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
    </div>);
};
export default TodoApp_gitInJun;