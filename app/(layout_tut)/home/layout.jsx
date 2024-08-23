"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./home.css";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const router = useRouter();
  const [userType, setUserType] = useState("");

  useEffect(() => {
    // Access localStorage safely on the client side
    const storedUserType = localStorage.getItem("user_type");
    setUserType(storedUserType);
  }, []);

  const handleLogout = () => {
    document.cookie =
      "user_type=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/login");
  };

  return (
    <>
      <div className="home-layout">
        <div className="home-layout-each">
          <Link href="/home">Home</Link>
        </div>
        <div className="home-layout-each">
          <Link href="/home/product">Product</Link>
        </div>
        <div className="home-layout-each">
          {/* Conditionally render the link only after userType has been set */}
          {userType && (
            <Link href={`/home/profile/${userType}`}>
              {userType.toUpperCase()}
            </Link>
          )}
        </div>
        <div className="home-layout-each">
          <Link href="/home/about">About</Link>
        </div>
        <div className="home-layout-each">
          <button className="home-layout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {children}
    </>
  );
};

export default Layout;
