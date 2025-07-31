import toast from "react-hot-toast";
import { http } from "./instance";
import { Post } from "@/types";

export const getPosts = () => {
  try {
    return http.get<Post[]>("/posts");
  } catch (error) {
    console.log(error);
    toast.error("Failed to fetch post!");
  }
};
