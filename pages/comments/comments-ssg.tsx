import { getComments } from "@/api/comments";
import CommentSSGPage from "@/app/comments/CommentSSG";
import { Comment } from "@/types/comments";

export async function getStaticProps() {
  const res = await getComments();
  const data = res?.data;

  return { props: { data } };
}

interface CommentSSGProps {
  data: Comment[];
}

const CommentsSSG = (props: CommentSSGProps) => {
  return <CommentSSGPage comments={props.data} />;
};

export default CommentsSSG;
