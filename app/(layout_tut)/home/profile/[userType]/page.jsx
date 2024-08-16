"use client"
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProfilePage = ({ params }) => {
  const path = usePathname();
  const [userType, setUserType] = useState("");
  useEffect(() => {
    setUserType(path.split("/").slice(-1)[0]);
  }, []);

  console.log(params);
  return <div>Profile Page: {userType}</div>;
};

export default ProfilePage;
