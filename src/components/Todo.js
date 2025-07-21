import React, { useState } from 'react';
import { ListItem, ListItemText, InputBase, Checkbox } from '@mui/material';

function Todo({ item }) {
  const todoItem = item;

  return (
    <ListItem>
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