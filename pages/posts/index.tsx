import { getPosts } from "@/api";
import PostPage from "@/app/Posts";
import { Post } from "@/types";
import React from "react";

interface PostProps {
  data: Post[];
}

export async function getServerSideProps() {
  const response = await getPosts();
  const data = response?.data;

  return { props: { data } };
}

const Posts = (props: PostProps) => {
  return <PostPage posts={props.data} />;
};

export default Posts;
