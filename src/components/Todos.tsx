import { useState } from "react";

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
      text: "todo 1",
      id: 4,
    },
    {
      text: "todo 2",
      id: 5,
    },
    {
      text: "todo 3",
      id: 6,
    },
  ]);
  const deleteItem = (itemId: number) => {
    // which item should we delete? How to know that?
    setTodos(todos.filter(itemEl => {
      return itemEl.id !== itemId
    }));
  }
  return (
    <ul>
      {todos.map((todoItem) => {
        return <li id={`todo_item_${todoItem.id}`} onClick={() => {
          deleteItem(todoItem.id);
        }} key={todoItem.id}>
          {todoItem.text}
        </li>
      })}
    </ul>
  );
};

export default Todos;
