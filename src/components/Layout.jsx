// components/Layout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-white">
      <div className={isHome ? "absolute top-0 left-0 w-full z-20" : "sticky top-0 z-20 bg-black"}>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
