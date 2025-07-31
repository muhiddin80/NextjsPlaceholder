import { getTodos } from "@/api/todos";
import TodosSSRPage from "@/app/Todos/TodosSSR";
import { Todos } from "@/types/todos";

export async function getStaticProps() {
  const res = await getTodos();
  const data = res?.data;

  return { props: { data } };
}

interface TodosSSRProps {
  data: Todos[];
}

const TodosSSG = (props: TodosSSRProps) => {
  return <TodosSSRPage todos={props.data} />;
};

export default TodosSSG;
