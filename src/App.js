import './App.css';
import { useState } from 'react';
import Todo from './components/Todo';
import { Container, Paper, List } from '@mui/material';

// Dummy Data
const initialTodos = 
  [
    { id: 0, title: "Hello world 1", done: true },
    { id: 1, title: "Hello world 2", done: false },
  ]
;

function App() {

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper style={{ margin: 16 }}>
        <List>
          {initialTodos.map((todo) => (
            <Todo
              key={todo.id}
              item={todo}
            />
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default App;
