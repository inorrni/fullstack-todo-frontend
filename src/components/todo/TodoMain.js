import { useEffect, useRef, useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { Container, Paper, ListItem, ListItemText, InputBase, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoMain() {
  const [items, setItems] = useState(
    [
      { id: "id-0", title: "Hello world 1", done: true, readOnly: true },
      { id: "id-1", title: "Hello world 2", done: false, readOnly: true },
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

  const itemList = items.length > 0 && (
    <TodoList>
    {items.map((item) => {
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton
          edge="end"
          aria-label={`Delete ${item.id}`}
          onClick={() => deleteItem(item.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox checked={item.done} onChange={() => toggleDoneHandler(item.id)} />
      <ListItemText
        primary={
          <InputBase
            inputProps={{ "aria-label": "naked", readOnly: item.readOnly }}
            type='text'
            id={item.id}
            value={item.title}
            fullWidth
            onClick={() => editStartHandler(item.id)}
            onChange={() => editTitle(item.id)}
            onKeyDown={enterKeyEventHandler}
          />
        }
      />
    </ListItem>
    })}
    </TodoList>
  );

  const addItem = ({ title }) => {
    setItems(prev =>
      prev.concat({
        id: `id-${prev.length}`,
        title,
        done: false,
        readOnly: true,
      })
    );
  };

  const editStartHandler = () => {
    setItems(prev => ({ ...prev, readOnly: false }));
  }

  const toggleDoneHandler = () => {
    setItems(prev => ({ ...prev, done: !items.done }));
  }

  const editTitle = e => {
    setItems(prev => ({ ...prev, title: e.target.value, readOnly: true }));
  };
  
  const enterKeyEventHandler = e => {
    if (e.key === 'Enter') {
      editTitle(e);
    }
  }

  const deleteItem = (id) => {
    setItems(prev =>
      prev.filter(items => items.id !== id)
    )
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ m: 2, p: 2 }}>
        <AddTodo addFn={addItem} />
      </Paper>
      <Paper sx={{ m: 2, p: 2 }}>
        
        {itemList}

        {/* <TodoList
          removeFn={deleteItem} editFn={editTitle} toggleFn={toggleDoneHandler} items={items}
        /> */}
      </Paper>
    </Container>
  );
}

export default TodoMain;
