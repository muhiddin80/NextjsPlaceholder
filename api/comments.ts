import toast from "react-hot-toast";
import { http } from "./instance";
import { Comment } from "@/types/comments";

export const getComments = () => {
  try {
    return http.get<Comment[]>("/comments");
  } catch (error) {
    console.log(error);
    toast.error("Failed to fetch comments!");
  }
};
