"use client";
import React from "react";

const CleintPage = () => {
  const clientClick = () => {
    alert("Client Side");
    console.log("Client Side");
  };
  return (
    <div>
      <button onClick={clientClick}>Client Click</button>
    </div>
  );
};

export default CleintPage;
