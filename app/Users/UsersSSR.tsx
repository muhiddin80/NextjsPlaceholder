import { User } from "@/types";
import React from "react";

interface UserSSRProps {
  users: User[];
}

const UsersSSR = (props: UserSSRProps) => {
  console.log(props, "hello");
  return (
    <div>
      <h1>UsersSSR</h1>
      {props.users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersSSR;
