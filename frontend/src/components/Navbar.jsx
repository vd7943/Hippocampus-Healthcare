import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto flex items-center justify-between px-4 py-3">
        <NavLink to="/" className="flex items-center justify-center space-x-1">
          <img
            src="/logo.jpg"
            alt="Hippocampus Heath Care Logo"
            className="w-13"
          />
          <span className="hidden lg:block text-2xl font-bold text-[#226930]">
            Hippocampus
          </span>
          <span className="hidden lg:block text-2xl font-bold text-[#46b21e]">
            Health Care
          </span>
        </NavLink>

        <div className="hidden md:flex items-center space-x-8 text-lg font-medium text-gray-800 pe-3">
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `transition-colors ${
                isActive ? "text-[#46b21e]" : "hover:text-[#46b21e]"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `transition-colors ${
                isActive ? "text-[#46b21e]" : "hover:text-[#46b21e]"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `transition-colors ${
                isActive ? "text-[#46b21e]" : "hover:text-[#46b21e]"
              }`
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `transition-colors ${
                isActive ? "text-[#46b21e]" : "hover:text-[#46b21e]"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `transition-colors ${
                isActive ? "text-[#46b21e]" : "hover:text-[#46b21e]"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#226930]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-6 py-3 space-y-3 text-gray-800 text-[16px] font-medium">
          <NavLink
            to="/about-us"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block transition-colors ${
                isActive ? "text-[#46b21e]" : "hover:text-[#46b21e]"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block transition-colors ${
                isActive ? "text-[#46b21e]" : "hover:text-[#46b21e]"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/pricing"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block transition-colors ${
                isActive ? "text-[#46b21e]" : "hover:text-[#46b21e]"
              }`
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block transition-colors ${
                isActive ? "text-[#46b21e]" : "hover:text-[#46b21e]"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/contact-us"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block transition-colors ${
                isActive ? "text-[#46b21e]" : "hover:text-[#46b21e]"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
