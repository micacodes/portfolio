import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from '../assets/mica-removebg-preview.png'

const Navbar = () => {
  return (
    <motion.nav
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
          <span className="text-2xl font-bold text-white">Micah Barasa</span>
        </Link>

        {/* Navbar Links */}
        <div className="space-x-6 text-lg">
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
    </motion.nav>
  );
};

export default Navbar;
