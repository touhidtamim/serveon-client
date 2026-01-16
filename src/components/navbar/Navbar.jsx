import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../logo/Logo";
import BtnPrimary from "../buttons/BtnPrimary";
import BtnOutline from "../buttons/BtnOutline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block text-sm font-medium transition ${
      isActive ? "text-sky-700" : "text-gray-700 hover:text-gray-900"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Brand */}
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <h1 className="text-2xl font-bold bg-linear-to-r from-sky-700 to-blue-900 bg-clip-text text-transparent">
              Serveon
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/how-it-works" className={navLinkClass}>
              How It Works
            </NavLink>
            <NavLink to="/providers" className={navLinkClass}>
              Providers
            </NavLink>
            <NavLink to="/pricing" className={navLinkClass}>
              Pricing
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <BtnOutline text="Login" to="/login" />
            <BtnPrimary text="Get Started" to="/register" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <NavLink
              to="/services"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/how-it-works"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </NavLink>
            <NavLink
              to="/providers"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Providers
            </NavLink>
            <NavLink
              to="/pricing"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            <div className="pt-4 flex flex-col gap-3">
              <BtnOutline text="Login" to="/login" />
              <BtnPrimary text="Get Started" to="/register" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
