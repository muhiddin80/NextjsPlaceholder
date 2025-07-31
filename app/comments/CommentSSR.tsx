import { Comment } from "@/types/comments";
import React from "react";

interface CommentsSSRProps {
  comments: Comment[];
}

const CommentSSR = (props: CommentsSSRProps) => {
  return (
    <div>
      <h1>CommentsPage</h1>
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

export default CommentSSR;
