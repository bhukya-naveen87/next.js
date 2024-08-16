import Link from "next/link";
import React from "react";
import "./home.css"

const Layout = ({ children }) => {
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
          <Link href="/home/profile">Profile</Link>
        </div>
        <div className="home-layout-each">
          <Link href="/home/about">About</Link>
        </div>
      </div>

      {children}
    </>
  );
};

export default Layout;
