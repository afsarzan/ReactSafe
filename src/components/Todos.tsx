import { FC } from "react";
import { Todo } from "../types";
import TodoItem from "./TodoItem";

type TodosProps = {
  todoArray: Todo[]
}
const Todos: FC<TodosProps> = ({
  todoArray
}) => {
  return (
    <ul>
      {
        todoArray.map((todo) => {
          return <TodoItem item={todo} key={todo.id} />
        })
      }
    </ul>
  );
};

export default Todos;
