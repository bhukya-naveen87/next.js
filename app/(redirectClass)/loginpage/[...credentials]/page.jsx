import { redirect } from "next/navigation";
import React from "react";

const LoginPage = ({ params }) => {
  console.log(params);
  if (
    params.credentials[0] === "govind" &&
    params.credentials[1] === "maddala"
  ) {
    redirect("/");
  }
  return <div>{params.credentials}</div>;
};

export default LoginPage;
