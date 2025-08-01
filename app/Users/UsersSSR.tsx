import { User } from "@/types";
import React from "react";

import cls from "./Users.module.css";

interface UserSSRProps {
  users: User[];
}

const UsersSSR = (props: UserSSRProps) => {
  console.log(props, "hello");
  return (
    <div className="container">
      <h1>UsersSSR</h1>
      {props.users.map((user) => (
        <div key={user.id} className={cls.user}>
          <p>
            <strong>Name: </strong>
            {user.name}
          </p>
          <p>
            <strong>Email: </strong>
            {user.email}
          </p>
          <p>
            <strong>Address: </strong>
            {user.address.city}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UsersSSR;
