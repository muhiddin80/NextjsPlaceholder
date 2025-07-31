import { Post } from "@/types";
import React from "react";

interface PostsProps {
  posts: Post[];
}

const PostPage = (props: PostsProps) => {
  return (
    <div className="container">
      <h1>Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PostPage;
