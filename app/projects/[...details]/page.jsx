"use client";
import React from "react";

const ProjectDetails = ({ params }) => {
  console.log(params);
  // for http://localhost:3000/projects/software/front-end/react/stock-exchange, params logs as following
  let paramsData = {
    details: ["software", "front-end", "react", "stock-exchange"],
  };
  return (
    <div>
      Project Details are:
      {params.details.join(", ")}
    </div>
  );
};

export default ProjectDetails;
