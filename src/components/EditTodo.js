import React from 'react'
import TextField from '@mui/material/TextField';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import useInput from '../hooks/useInput';
import Button from '@mui/material/Button';



const EditTodo = ({editTodo, todo, toggleEditing}) => {
        const [value, handleChange, reset] = useInput(todo.task)

    const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(todo.id, value)
        reset()
        toggleEditing()

    }

    return (
      <form onSubmit={handleSubmit} style={{marginLeft: '1rem', width: '50%'}}>
    <TextField
        id="outlined-textarea"
        value={value}
        color="primary"
        margin="normal"
        variant='standard'
        onChange={handleChange}
                fullWidth
                autoFocus
            />
            <ListItemSecondaryAction>
                <Button variant="outlined" type='submit'>Edit</Button>
            </ListItemSecondaryAction>
        
            </form>
  )
}

export default EditTodo