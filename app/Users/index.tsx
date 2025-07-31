import { getUser } from "@/api";
import { User } from "@/types";
import React, { useEffect, useState } from "react";

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
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
