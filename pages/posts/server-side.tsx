import { getPosts } from "@/api";
import PostsSSRPage from "@/app/Posts/PostsSSR";
import { Post } from "@/types";
import React from "react";

export async function getStaticProps() {
  const res = await getPosts();
  const data = res?.data || [];

  return { props: { data } };
}

interface PostsSSRProps {
  data: Post[];
}

const PostsSSG = (props: PostsSSRProps) => {
  return <PostsSSRPage posts={props.data} />;
};

export default PostsSSG;
