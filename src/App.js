import './App.css';
import { useEffect, useRef, useState } from 'react';
import Todo from './components/Todo';
import { Container, Paper, List } from '@mui/material';
import AddTodo from './components/AddTodo';

function App() {
  const [items, setItems] = useState(
    [
      { id: "id-0", title: "Hello world 1", done: true },
      { id: "id-1", title: "Hello world 2", done: false },
    ]
  );
  
  const isFirstRender = useRef(true);   // ① 컴포넌트 생애주기 동안 유지되는 플래그

  useEffect(() => {
    if (isFirstRender.current) {
      console.log('🔰 initial items:', items);   // 최초 한 번
      isFirstRender.current = false;            // ② 이후부터는 false
    }
  }, []);  

  useEffect(() => {
    console.log('🔄 items updated:', items);   // 상태가 바뀔 때마다
  }, [items]);  

  const addTodo = ({ title }) => {
    setItems(prev =>
      prev.concat({
        id: `id-${prev.length}`,
        title,
        done: false,
      })
    );
  };

  const removeTodo = (id) => {
    setItems(prev =>
      prev.filter(todo => todo.id !== id)
    )
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
              remove={removeTodo}
            />
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default App;
