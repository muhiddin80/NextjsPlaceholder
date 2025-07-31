import toast from "react-hot-toast";
import { http } from "./instance";
import { Todos } from "@/types/todos";

export const getTodos = () => {
  try {
    return http.get<Todos[]>("/todos");
  } catch (error) {
    console.log(error);
    toast.error("Failed to load Todos!");
  }
};
