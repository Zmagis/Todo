import React from 'react';

import { TodoItem } from './item/TodoItem';

import classes from './TodoItems.module.css';

interface Props {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

export const TodoItems: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <div className={classes.Todos}>
      <input value="Random List" />
      {todos
        ? todos.map((todo) => (
            <TodoItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
          ))
        : null}
    </div>
  );
};
