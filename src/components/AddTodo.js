import { Grid, Paper, TextField, Button } from '@mui/material';
import { useState } from 'react';

function AddTodo(props) {
  const [item, setItem] = useState({ title: "" });

  const onButtonClick = () => {
    props.add(item);
    setItem({ title: "" });
  }

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid sx={11} mb={1} style={{ paddingRight: 16 }}>
          <TextField
            placeholder="Add Todo here"
            fullWidth="true"
            value={item.title}
            onChange={e => setItem({ title: e.target.value })}
          />
        </Grid>
        <Grid sx={1} mb={1}>
          <Button
            fullWidth="true"
            color="secondary"
            variant="outlined"
            onClick={onButtonClick}
          >
            +
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default AddTodo