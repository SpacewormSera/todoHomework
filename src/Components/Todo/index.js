import { Checkbox, ListItem, Typography } from '@material-ui/core';
// import CloseIcon from 'material-ui/icons/Close';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: 'flex' }}>

      <Checkbox
        checked={todo.completed}
        type="checkbox"
        onClick={handleCheckboxClick}
      />
      <Typography
        variant="body1"
        style={{
          color: "black",
          textDecoration: todo.completed ? 'line-through' : null
        }}
      >
        {todo.task}
      </Typography>
      <button type="submit" onClick={handleRemoveClick}>
        delete
      </button>
    </ListItem>
  )
}

export default Todo;
