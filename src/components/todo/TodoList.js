import { useState } from 'react';
import { List, ListItem, ListItemText, InputBase, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList(props) {
  const item = props.items;

  const editEventHandler = (item) => {
    props.editFn(item);
  }

  const enterKeyEventHandler = e => {
    if (e.key === 'Enter') {
      props.editFn(item.id);
    }
  }

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton
          edge="end"
          aria-label={`Delete ${item.id}`}
          onClick={() => props.removeFn(item.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox checked={item.done} onChange={() => props.toggleFn(item.id)} />
      <ListItemText
        primary={
          <InputBase
            inputProps={{ "aria-label": "naked", readOnly: item.readOnly }}
            type='text'
            id={item.id}
            value={item.title}
            fullWidth
            onClick={() => props.editFn(item.id)}
            onChange={editEventHandler}
            onKeyDown={enterKeyEventHandler}
          />
        }
      />
    </ListItem>

  )
}

export default TodoList;