import { getUser } from "@/api";
import UsersSSR from "@/app/Users/UsersSSR";
import { User } from "@/types";
import React from "react";

export async function getServerSideProps() {
  const res = await getUser();
  const data = res?.data;

  console.log(res);
  return { props: { data } };
}

interface UserSSRProps {
  data: User[];
}

const ServerSide = (props: UserSSRProps) => {
  console.log(props);
  return <UsersSSR users={props.data} />;
};

export default ServerSide;
