import { Todos } from "@/types/todos";

import cls from "./Todos.module.css";

interface TodosSSRProps {
  todos: Todos[];
}

const TodosSSRPage = (props: TodosSSRProps) => {
  return (
    <div className="container">
      <h1>TodosPage</h1>
      {props.todos.map((todo) => (
        <div key={todo.id} className={cls.todo}>
          <p>
            <strong>Title: </strong>
            {todo.title}
          </p>
          <p>
            <strong>Completed: </strong>
            {`${todo.completed}`}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodosSSRPage;
