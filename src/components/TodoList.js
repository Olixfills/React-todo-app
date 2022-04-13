import React from 'react'
// import List from '@mui/material/List';
import Todo from './Todo';





const TodoList = ({ todo, removeTodo, toggleTodo, editTodo }) => {
    const { id } = todo

    
        return (
            <>
                <Todo key={id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
        
            </>
        )
    
}

    export default TodoList;