import { Grid, Paper, TextField, Button, IconButton } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import { useState } from 'react';

function AddTodo(props) {
  //새 항목을 부모에게 알려 주는 콜백만 호출하는 “입력 전용(Form) 컴포넌트”
  const [newItem, setNewItem] = useState({ title: "" });

  const onButtonClick = () => {
    props.addFn(newItem);
    setNewItem({ title: "" });
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      onButtonClick();
    }
  };

  return (
      <Grid container>
        <Grid size={{xs:11, md:11}} paddingRight={1}>
          <TextField
            label="TITLE"
            placeholder="Add Todo here"
            variant="outlined"
            size="small"
            fullWidth
            value={newItem.title}
            onChange={e => setNewItem({ title: e.target.value })}
            onKeyUp={enterKeyEventHandler}
          />
        </Grid>
        <Grid size={{xs:1, md:1}}>
          <IconButton
            aria-label="Add Todo"
            onClick={onButtonClick}
          >
            <AddCircleOutline 
              color='primary'
            />
          </IconButton>
        </Grid>
      </Grid>
  )
}

export default AddTodo