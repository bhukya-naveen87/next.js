"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const router = useRouter(); // useRouter hook for client-side navigation

  const handleLogin = () => {
    if (user && user.trim() && ["user", "admin"].includes(user)) {
      document.cookie = `user_type=${user}; path=/;`; // Set user_type in a cookie
      router.push("/home"); // Use router.push for client-side redirection
      setUser("");
    } else {
      setUser("");
      alert("Invalid User");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      {user && <button onClick={handleLogin}>Login</button>}
    </div>
  );
};

export default Login;
