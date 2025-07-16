// components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, FolderOpen, BookOpen, Mail } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: "Home", icon: Home, path: "/" },
    { label: "Projects", icon: FolderOpen, path: "/projects" },
    { label: "Blogs", icon: BookOpen, path: "/blogs" },
    { label: "Contact", icon: Mail, path: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 text-white">
      <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition">
        MY-REALESTATE
      </Link>

      <div className="hidden md:flex items-center space-x-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-2 px-4 py-2 rounded ${
                currentPath === item.path
                  ? "bg-white/20 text-blue-200 border border-white/30 backdrop-blur-md"
                  : "hover:bg-white/10 hover:text-blue-200"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/80 p-4 md:hidden z-50">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-4 py-3 space-x-2 rounded ${
                  currentPath === item.path
                    ? "bg-white/20 text-blue-200"
                    : "hover:bg-white/10 hover:text-blue-200"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
