import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-black text-white py-8 px-6"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* 🔹 About / Tagline */}
        <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg border border-purple-500">
          <h2 className="text-xl font-semibold text-purple-400">Micah Barasa</h2>
          <p className="text-gray-400 mt-2">
            Backend Engineer | Scalable Systems | API Development
          </p>
          <p className="text-sm text-gray-500 italic mt-2">
            "Turning ideas into high-performance solutions."
          </p>
        </div>

        {/* 🔹 Quick Links */}
        <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg border border-purple-500">
          <h3 className="text-lg font-semibold text-purple-400">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-purple-500 transition duration-300">Home</a>
            </li>
            <li>
              <a href="/projects" className="text-gray-400 hover:text-purple-500 transition duration-300">Projects</a>
            </li>
            {/* <li> */}
              {/* <a href="/about" className="text-gray-400 hover:text-purple-500 transition duration-300">About Me</a> */}
            {/* </li> */}
            <li>
              <a href="/contact" className="text-gray-400 hover:text-purple-500 transition duration-300">Contact</a>
            </li>
          </ul>
        </div>

        {/* 🔹 Contact & Socials */}
        <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg border border-purple-500">
          <h3 className="text-lg font-semibold text-purple-400">Get in Touch</h3>
          <p className="text-gray-400 mt-2 flex items-center justify-center md:justify-start">
            <FaEnvelope className="mr-2 text-purple-500" />
            <a
              href="mailto:barasamicah@gmail.com"
              className="hover:text-purple-500 transition duration-300"
            >
              barasamica@gmail.com
            </a>
          </p>

          <p className="text-gray-400 mt-2 flex items-center justify-center md:justify-start">
            <FaMapMarkerAlt className="mr-2 text-purple-500" /> Nairobi, Kenya
          </p>

          {/* 🔹 Social Icons */}
          <div className="flex justify-center md:justify-start mt-4 space-x-6">
            <motion.a
              href="https://www.linkedin.com/in/mica-barasa/"
              className="text-purple-400 hover:text-purple-500 text-3xl"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/Barasa-Micah"
              className="text-purple-400 hover:text-purple-500 text-3xl"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>

      </div>

      {/* 🔹 Copyright Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Micah Barasa. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
