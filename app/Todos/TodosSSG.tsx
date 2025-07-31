import { Todos } from "@/types/todos";

interface TodosSSGProps {
  todos: Todos[];
}

const TodosSSGPage = (props: TodosSSGProps) => {
  return (
    <div className="container">
      <h1>TodosPage</h1>
      {props.todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <p>{todo.completed}</p>
          <p>{todo.userId}</p>
        </div>
      ))}
    </div>
  );
};

export default TodosSSGPage;
