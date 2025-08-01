import { Todos } from "@/types/todos";

import cls from "./Todos.module.css";

interface TodosSSGProps {
  todos: Todos[];
}

const TodosSSGPage = (props: TodosSSGProps) => {
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

export default TodosSSGPage;
