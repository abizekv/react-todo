import { useState } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem'
import TodoForm from './TodoForm';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';



const getTodo = () => {
  const data = JSON.parse(localStorage.getItem('todos'));
  return data || [];
}
export default function TodoList() {
  const [todos, setTodos] = useState(getTodo)

useEffect(()=> {
  localStorage.setItem('todos',JSON.stringify(todos))
},[todos])


  const removeTodo = (id) => {
    setTodos(currTodos => {
      return currTodos.filter(todo => todo.id !== id)
    })
  }
  const toggleTodo = (id) => {
    setTodos(currTodos => {
      return currTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        } else {
          return todo
        }
      })
    })
  }

  const addTodo = (text) => {
    setTodos(currTodos => {
      return [...currTodos, { id: crypto.randomUUID(), text: text, completed: false }]
    })
  }

  return (
    <Box
    sx={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      m:3
    }}
    >
      <Typography variant="h3" component="h1" sx={{ flexGrow: 1 }}>
            Todo
          </Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            remove={removeTodo}
            toggle={toggleTodo}
            add={addTodo}
          />
        )
        )}
        <TodoForm add={addTodo} />
      </List>
    </Box>
  )
}



