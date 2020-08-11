import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import RandomCatApi from '../RandomCatApi';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false
  });

  function handleTaskInputChange(event) {
    console.log(event.target.value);
    setTodo({ ...todo, task: event.target.value });
    // debugger;
    console.log('set todo>>>', todo);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('click');
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: '' }); // clear the form
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange} />
      <button type="submit">Add ToDo</button>
      <RandomCatApi />
    </form>
  )
}

export default TodoForm;
