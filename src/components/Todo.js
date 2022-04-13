import React from 'react'
import useToggle from '../hooks/useToggle';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import EditTodo from './EditTodo';


const Todo = ({ todo, removeTodo, toggleTodo, editTodo }) => {
    const [editing, toggleEditing] = useToggle()
    const { task, completed, id } = todo;

    return (
        <ListItem style={{height: '64px'}}>
            {editing ? <EditTodo editTodo={editTodo} todo={todo} toggleEditing={toggleEditing} /> : 
                <>
            <Checkbox checked={completed} tabIndex={-1} onClick={()=> toggleTodo(id)}/>
            <ListItemText style={{textDecoration: completed? 'line-through': 'none'}}>{task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='edit' onClick={toggleEditing}>
                    <EditRoundedIcon color='primary'/>
                </IconButton>
                <IconButton aria-label='delete' onClick={()=> removeTodo(id)}>
                    <DeleteRoundedIcon color='red'/>
                </IconButton>
            </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    )
}

export default Todo