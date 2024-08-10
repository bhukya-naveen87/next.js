"use client"
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  const handleClick = (url) => {
    router.push(url);
  };
  return (
    <div>
      <h3>useRouter Tutorial</h3>
      <button onClick={() => handleClick("/about")}>About</button>
      <button onClick={() => handleClick("/about/me/personal")}>
        Personal
      </button>
    </div>
  );
};

export default page;
