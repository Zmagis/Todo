import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Input, Form } from 'antd';

import classes from './AddNewTodo.module.css';

interface Props {
  addTodo: AddTodo;
}

export const AddNewTodo: React.FC<Props> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setNewTodo(e.target.value);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
    }
    setNewTodo('');
  };
  return (
    <form className={classes.AddNewTodo}>
      {/* <input
        type="text"
        placeholder="something todo..."
        value={newTodo}
        onChange={handleChange}
      /> */}
      {/* <button type="submit" onClick={submitHandler}>
        Add
      </button> */}
      <Form.Item>
        <Input
          placeholder="something todo..."
          value={newTodo}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={submitHandler}>
          Button
        </Button>
      </Form.Item>
    </form>
  );
};
