import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <Link href="/users">
        <button>Go to Users</button>
      </Link>
    </div>
  );
};

export default Home;
