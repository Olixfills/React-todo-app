import {useState} from 'react'

export default (initTodo) => {
    const [todos, setTodos] = useState(initTodo);

    return {
        todos,
        addTodos: (newTodoText) => {
        setTodos([...todos, {id: new Date().getTime().toString(), task: newTodoText, completed: false}])
        },
        removeTodo: (todoId) => {
        const updatedTodoList = todos.filter((todo)=> todo.id !== todoId)
        setTodos(updatedTodoList);
        },
        toggleTodo: (todoId) => {
            const updatedTodos = todos.map((todo) => {
                return todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        })
        setTodos(updatedTodos)
        },
        editTodo: (todoId, newTask) => {
        const updatedTodos = todos.map((todo) => {
                return todo.id === todoId ? { ...todo, task: newTask} : todo
        })
        setTodos(updatedTodos)
    }
    }

}
