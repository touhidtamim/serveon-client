import React from "react";
import Logo from "../logo/Logo";
import BtnPrimary from "../buttons/BtnPrimary";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Logo />
            {/* Website name */}
            <h1>Serveon</h1>
          </div>

          {/* Middle: Nav Links */}
          <div className="hidden md:flex items-center gap-8 ml-12">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
            >
              Services
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
            >
              How It Works
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
            >
              Become a Provider
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
            >
              About
            </a>
          </div>

          {/* Right: CTA Buttons (static for now) */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition">
              Login
            </button>
            <BtnPrimary text="Get Started" to="/register" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
