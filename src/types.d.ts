type Todo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (clickedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;
