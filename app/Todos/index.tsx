import { getTodos } from "@/api/todos";
import { Todos } from "@/types/todos";
import { useEffect, useState } from "react";

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
        <div key={todo.id}>
          <p>{todo.title}</p>
          <p>{todo.completed}</p>
          <p>{todo.userId}</p>
        </div>
      ))}
    </div>
  );
};

export default TodosPage;
