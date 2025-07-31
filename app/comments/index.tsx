import { getComments } from "@/api/comments";
import { Comment } from "@/types/comments";
import { useEffect, useState } from "react";

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
        <div key={comment.id}>
          <p>{comment.name}</p>
          <p>{comment.body}</p>
          <p>{comment.email}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsPage;
