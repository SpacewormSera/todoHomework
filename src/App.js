import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import './App.css';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

function App() {
  const [todos, setTodos] = useState([]);

  // load todos from local storage when []
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  // if todos chandes save todos to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    console.log('addTodo>>', todo);
    setTodos([todo, ...todos]);
    console.log('todos>>>', todos);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        React Todo
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />

    </div>
  );
}

export default App;
