import { getUser } from "@/api";
import { User } from "@/types";
import React, { useEffect, useState } from "react";

import cls from "./Users.module.css";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    getUser()?.then((res) => {
      if (res) setUsers(res.data);
    });
  }, []);
  return (
    <div className="container">
      <h1>UserPage</h1>
      {users.map((user) => (
        <div key={user.id} className={cls.user}>
          <h1>{user.id}</h1>
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

export default UsersPage;
