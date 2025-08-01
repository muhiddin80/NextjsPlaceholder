import { getComments } from "@/api/comments";
import { Comment } from "@/types/comments";
import { useEffect, useState } from "react";

import cls from "./Comment.module.css";

const CommentsPage = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    getComments()?.then((res) => {
      setComments(res.data);
    });
  }, []);
  return (
    <div className="container">
      <h1>CommentsPage</h1>
      {comments.map((comment) => (
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

export default CommentsPage;
