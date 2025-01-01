import { FC } from "react";
import { Todo } from "../types";

type TodoItemProps = { 
  item: Todo; 
};

const TodoItem: FC<TodoItemProps> = ({ item }) => {
  return (
    <li
      id={`todo_item_${item.id}`}
    >
      {item.title}
    </li>
  );
};

export default TodoItem;
