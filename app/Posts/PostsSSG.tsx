import { Post } from "@/types";
import React from "react";

interface PostsSSGProps {
  posts: Post[];
}

const PostsSSGPage = (props: PostsSSGProps) => {
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

export default PostsSSGPage;
