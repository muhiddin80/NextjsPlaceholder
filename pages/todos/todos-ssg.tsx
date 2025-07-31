import { getTodos } from "@/api/todos";
import TodosSSGPage from "@/app/Todos/TodosSSG";
import { Todos } from "@/types/todos";

export async function getStaticProps() {
  const res = await getTodos();
  const data = res?.data;

  return { props: { data }, revalidate: 86400 };
}

interface TodosSSGProps {
  data: Todos[];
}

const TodosSSG = (props: TodosSSGProps) => {
  return <TodosSSGPage todos={props.data} />;
};

export default TodosSSG;
