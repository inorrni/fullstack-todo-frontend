import './App.css';
import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import { Container, Paper, List } from '@mui/material';
import AddTodo from './components/AddTodo';

// Dummy Data
function App() {
  
  const [items, setItems] = useState(
    [
      { id: 0, title: "Hello world 1", done: true },
      { id: 1, title: "Hello world 2", done: false },
    ]
  );

  useEffect(() => {
    console.log("items updated:", items);
  }, [items]);

  const addTodo = ({ title }) => {
    setItems(prev =>
      prev.concat({
        id: `ID-${prev.length}`,
        title,
        done: false,
      })
    );
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <AddTodo add={addTodo} />
      <Paper style={{ margin: 16 }}>
        <List>
          {items.map((todo) => (
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
