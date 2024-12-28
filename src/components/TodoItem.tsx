import { FC, useEffect } from "react";

type Todo = {
  text: string;
  id: number;
};

type TodoItemProps = { 
  item: Todo; 
  onDelete: (itemId: number) => void
};

const TodoItem: FC<TodoItemProps> = ({ item, onDelete }) => {
  useEffect(() => {
    console.log(`component rendered for item ${item.id}`);

    return () => {
      console.log(`component removed for item ${item.id}`);
    };
  }, []);
  return (
    <li
      onClick={() => {
        onDelete(item.id);
      }}
      id={`todo_item_${item.id}`}
    >
      {item.text}
    </li>
  );
};

export default TodoItem;
