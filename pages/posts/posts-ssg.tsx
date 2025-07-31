import { getPosts } from "@/api";
import PostsSSGPage from "@/app/Posts/PostsSSG";
import { Post } from "@/types";
import React from "react";

export async function getStaticProps() {
  const res = await getPosts();
  const data = res?.data || [];

  return { props: { data }, revalidate: 86400 };
}

interface PostsSSGProps {
  data: Post[];
}

const PostsSSG = (props: PostsSSGProps) => {
  return <PostsSSGPage posts={props.data} />;
};

export default PostsSSG;
