import React from 'react';

import classes from './TodoItem.module.css';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  let styleName = todo.complete
    ? [classes.TodoItem, classes.complete].join(' ')
    : classes.TodoItem;

  return (
    <label className={styleName}>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => toggleTodo(todo)}
      />
      {todo.text}
    </label>
  );
};
