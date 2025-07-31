import toast from "react-hot-toast";
import { http } from "./instance";
import { User } from "@/types";

export const getUser = async () => {
  try {
    return http.get<User[]>("/users");
  } catch (error) {
    console.log(error);
    toast.error("User data error!");
  }
};
