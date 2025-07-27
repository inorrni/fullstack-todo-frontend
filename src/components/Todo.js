import React, { useState } from 'react';
import { ListItem, ListItemText, InputBase, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo({ item, remove }) {
  const todoItem = item;

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton
          edge="end"
          aria-label={`Delete ${todoItem.id}`}
          onClick={() => remove(todoItem.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox checked={todoItem.done} />
      <ListItemText>
        <InputBase
          inputProps={{ "aria-label": "naked" }}
          type='text'
          id={todoItem.id}
          name={todoItem.id}
          value={todoItem.title}
          multiline={true}
          fullWidth={true}
        />
      </ListItemText>
    </ListItem>
  )
}

export default Todo;