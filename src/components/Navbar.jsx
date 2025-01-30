import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-purple-600 p-4 text-white"
    >
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">
          Micah Barasa
        </Link>
        <div className="space-x-4">
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
