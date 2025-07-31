import { Comment } from "@/types/comments";

interface CommmentSSGProps {
  comments: Comment[];
}

const CommentSSGPage = (props: CommmentSSGProps) => {
  return (
    <div className="container">
      <h1>CommentPage</h1>
      {props.comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.name}</p>
          <p>{comment.body}</p>
          <p>{comment.email}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentSSGPage;
