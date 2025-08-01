import { getTodos } from "@/api/todos";
import { Todos } from "@/types/todos";
import { useEffect, useState } from "react";

import cls from "./Todos.module.css";

const TodosPage = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  useEffect(() => {
    getTodos()?.then((res) => {
      setTodos(res.data);
    });
  }, []);
  return (
    <div className="container">
      <h1>TodosPage</h1>
      {todos.map((todo) => (
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

export default TodosPage;
