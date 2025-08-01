import { Comment } from "@/types/comments";

import cls from "./Comment.module.css";

interface CommmentSSGProps {
  comments: Comment[];
}

const CommentSSGPage = (props: CommmentSSGProps) => {
  return (
    <div className="container">
      <h1>CommentPage</h1>
      {props.comments.map((comment) => (
        <div key={comment.id} className={cls.comment}>
          <p>
            <strong>Name: </strong>
            {comment.name}
          </p>
          <p>
            <strong>Body: </strong>
            {comment.body}
          </p>
          <p>
            <strong>Email: </strong>
            {comment.email}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommentSSGPage;
