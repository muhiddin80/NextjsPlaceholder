import { Post } from "@/types";
import React from "react";

interface PostsSSRProps {
  posts: Post[];
}

const PostsSSRPage = (props: PostsSSRProps) => {
  return (
    <div className="container">
      <h1>Posts SSG</h1>
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

export default PostsSSRPage;
