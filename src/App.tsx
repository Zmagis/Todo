import React, { useState } from 'react';

import { TodoItems } from './components/todoItems/TodoItems';
import { AddNewTodo } from './components/form/AddNewTodo';

import './App.less';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const toggleTodo: ToggleTodo = (clickedTodo) => {
    const clicked = todos.findIndex((todo) => todo === clickedTodo);
    const newTodos = [...todos];
    newTodos[clicked].complete = !newTodos[clicked].complete;
    setTodos(newTodos);
  };
  const addTodo: AddTodo = (newTodo) => {
    setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <div className="App">
      <h1>TODO</h1>

      <TodoItems todos={todos} toggleTodo={toggleTodo} />
      <AddNewTodo addTodo={addTodo} />
    </div>
  );
};

export default App;
