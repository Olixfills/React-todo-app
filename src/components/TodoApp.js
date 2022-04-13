import React, { useEffect} from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';
import List from '@mui/material/List';
import TodoForm from './TodoForm';
import Divider from '@mui/material/Divider';
import EmptyTodo from './EmptyTodo'
import useTodoState from '../hooks/useTodoState';




const TodoApp = () => {
const initTodo = JSON.parse(window.localStorage.getItem('todos')) || []

    const { todos, addTodos, removeTodo, toggleTodo, editTodo } = useTodoState(initTodo);
//     const initTodo = [
//     {id: 1, task: 'clean fish tank', completed: false},
//     {id: 2, task: 'pick up groceries', completed: true},
//     {id: 3, task: 'finish courses', completed: false}
// ]

    useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
    
    
    //ANCHOR: returns here
    if (!todos.length) {
        return (
    <Paper style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
    }}
    elevation={0}>
        <AppBar color='primary' position='static' style={{ height: '64px' }} >
            <Toolbar>
                <Typography  color='inherit'><span style={{fontWeight: 'bolder', fontSize: 35}}>TODO  </span><i style={{fontWeight: 'lighter'}}>by olix</i></Typography>
            </Toolbar>
        </AppBar>
        <Grid container justifyContent='center' style={{marginTop: '1.5rem'}}>
        <Grid item xs={11} md={8} lg={6} >
        <TodoForm addTodos={addTodos} />
        <EmptyTodo />
        </Grid>
        </Grid>
        </Paper>)
    }
    
return (
    <Paper style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
    }}
    elevation={0}>
        <AppBar color='primary' position='static' style={{ height: '64px' }} >
            <Toolbar>
                <Typography  color='inherit'><span style={{fontWeight: 'bolder', fontSize: 35}}>TODO </span><i style={{fontWeight: 'lighter'}}>by olix</i></Typography>
            </Toolbar>
        </AppBar>
        <Grid container justifyContent='center' style={{marginTop: '1.5rem'}}>
        <Grid item xs={11} md={8} lg={6} >
                <TodoForm addTodos={addTodos} />
        <Paper>
            <List>
                {todos.map((todo, i) =>
                    <div key={todo.id}>
                        <TodoList todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                        {i < todos.length - 1 && <Divider />}
                    </div>)}
            </List>
        </Paper>
        </Grid>
        </Grid>
        
    </Paper>

        )
    
}


export default TodoApp
