import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from '../assets/mica-removebg-preview.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-purple-600 p-4 text-white shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Micah Barasa"
            className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full border-4 border-white shadow-lg"
          />
          <span className="text-2xl font-bold text-white hidden sm:block">Micah Barasa</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar Links (Desktop) */}
        <div className="hidden sm:flex space-x-6 text-lg">
          <Link
            to="/"
            className="hover:text-purple-200 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="hover:text-purple-200 transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-purple-200 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`sm:hidden ${isMenuOpen ? "block" : "hidden"} mt-4`}
      >
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="block text-lg text-white py-2 hover:text-purple-200"
        >
          Home
        </Link>
        <Link
          to="/projects"
          onClick={() => setIsMenuOpen(false)}
          className="block text-lg text-white py-2 hover:text-purple-200"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="block text-lg text-white py-2 hover:text-purple-200"
        >
          Contact
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
