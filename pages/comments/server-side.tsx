import { getComments } from "@/api/comments";
import CommentSSR from "@/app/comments/CommentSSR";
import { Comment } from "@/types/comments";

export async function getServerSideProps() {
  const res = await getComments();
  const data = res?.data;

  return { props: { data } };
}

interface CommentSSRProps {
  data: Comment[];
}

const ServerSide = (props: CommentSSRProps) => {
  return <CommentSSR comments={props.data} />;
};

export default ServerSide;
