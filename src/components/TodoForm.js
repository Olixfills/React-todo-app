import React from 'react'
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import useInput from '../hooks/useInput';



const TodoForm = ({ addTodos }) => {
    const [value, handleChange, reset] = useInput('')
    

    return (
        <Paper style={{margin: '1rem 0', padding:'0 1rem'}} >
            <form onSubmit={(e) => {
                e.preventDefault()
                addTodos(value)
                reset()
                
            }}>

        <TextField
                id="outlined-textarea"
                label="Add new todo"
                color="primary"
                margin="normal"
                variant='standard'
                value={value}
                onChange={handleChange}
                fullWidth
        />
        </form>
        </Paper>
)
}

export default TodoForm