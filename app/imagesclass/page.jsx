import React from "react";
import developmentImg from "@/public/images/development.png";
import Image from "next/image";

const ImagePage = () => {
  return (
    <div>
      <h3>Static Image</h3>
      <Image src={developmentImg} alt="Developement" width={900} height={900} />
      <br />
      <h3>URL Image</h3>
      <Image src="https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Developement" width={900} height={900}  />
    </div>
  );
};

export default ImagePage;
