import { Comment } from "@/types/comments";
import React from "react";

import cls from "./Comment.module.css";

interface CommentsSSRProps {
  comments: Comment[];
}

const CommentSSR = (props: CommentsSSRProps) => {
  return (
    <div className="container">
      <h1>CommentsPage</h1>
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

export default CommentSSR;
