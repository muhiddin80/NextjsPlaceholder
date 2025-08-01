import { Post } from "@/types";
import React from "react";

import cls from "./Post.module.css";

interface PostsSSGProps {
  posts: Post[];
}

const PostsSSGPage = (props: PostsSSGProps) => {
  return (
    <div className="container">
      <h1>Posts SSG</h1>
      {props.posts.map((post) => (
        <div key={post.id} className={cls.post}>
          <p>
            <strong>Title: </strong>
            {post.title}
          </p>
          <p>
            <strong>Body: </strong>
            {post.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PostsSSGPage;
