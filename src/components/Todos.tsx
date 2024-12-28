import { useState } from "react";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      text: "todo 1",
      id: 1,
    },
    {
      text: "todo 2",
      id: 2,
    },
    {
      text: "todo 3",
      id: 3,
    },
    {
      text: "todo 4",
      id: 4,
    },
    {
      text: "todo 5",
      id: 5,
    },
    {
      text: "todo 6",
      id: 6,
    },
  ]);
  const deleteItem = (itemId: number) => {
    setTodos(
      todos.filter((itemEl) => {
        return itemEl.id !== itemId;
      })
    );
  };

  const addNewTodo = () => {
    setTodos((todos) => {
      return [
        {
          text: "new Todo",
          id: Date.now(),
        },
        ...todos,
      ];
    });
  };

  return (
    <ul>
      <li>
        <button onClick={addNewTodo}>Click me to add new todo</button>
      </li>
      {todos.map((todoItem) => {
        return (
          <TodoItem key={todoItem.id} item={todoItem} onDelete={deleteItem} />
        );
      })}
    </ul>
  );
};

export default Todos;
