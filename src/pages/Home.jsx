import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaLaravel, FaReact, FaNodeJs, FaDatabase, FaPhp, FaCode } from "react-icons/fa";
import { SiDjango, SiMysql, SiFlask, SiJavascript, SiTailwindcss } from "react-icons/si";
import micahImage from '../assets/Screenshot_20240307_151501_Gallery.jpg';
import micaResume from '../assets/mica.pdf';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/10 to-black opacity-50"></div>

      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center bg-[#1E1E1E] shadow-xl rounded-xl p-8 md:p-12 max-w-6xl w-full border border-purple-500 z-10"
      >
        {/* Profile Image */}
        <motion.img
          src={micahImage} 
          alt="Micah Barasa"
          className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-purple-500 shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* About Me Section */}
        <div className="md:ml-8 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-5xl font-extrabold text-purple-400">Micah Barasa</h1>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            Backend Software Engineer with expertise in scalable systems, RESTful APIs, and database optimization.  
            I specialize in designing high-performance backend architectures and integrating secure authentication mechanisms.
          </p>

          {/* Animated Resume Button */}
          <motion.a
            href={micaResume} 
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 font-semibold"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>

      {/* Tech Stack Section */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-semibold text-purple-400">Tech Stack</h2>
        <p className="text-gray-400 mt-2">Tools and technologies I use</p>

        <div className="flex flex-wrap justify-center gap-8 mt-8 text-purple-400 text-6xl">
          <FaPython title="Python" className="hover:text-purple-500 transition duration-300" />
          <SiDjango title="Django" className="hover:text-purple-500 transition duration-300" />
          <FaPhp title="PHP" className="hover:text-purple-500 transition duration-300" />
          <FaLaravel title="Laravel" className="hover:text-purple-500 transition duration-300" />
          <FaReact title="React" className="hover:text-purple-500 transition duration-300" />
          <FaNodeJs title="Node.js" className="hover:text-purple-500 transition duration-300" />
          <SiFlask title="Flask" className="hover:text-purple-500 transition duration-300" />
          <SiMysql title="MySQL" className="hover:text-purple-500 transition duration-300" />
          <FaDatabase title="Databases" className="hover:text-purple-500 transition duration-300" />
          <SiJavascript title="JavaScript" className="hover:text-purple-500 transition duration-300" />
          <SiTailwindcss title="Tailwind CSS" className="hover:text-purple-500 transition duration-300" />
        </div>
      </div>

      {/* What I Do Section */}
      <div className="mt-16 text-center bg-[#1E1E1E] p-6 rounded-xl border border-purple-500 shadow-lg w-full max-w-6xl">
        <h2 className="text-4xl font-semibold text-purple-400">What I Do</h2>
        <p className="text-gray-300 mt-2 leading-relaxed">
          I build high performance backend systems, develop secure REST APIs, optimize database queries, 
          and ensure smooth frontend-backend integrations. My expertise includes server-side programming and
          cloud computing
        </p>
        <div className="mt-4 flex justify-center gap-6 text-purple-400 text-5xl">
          <FaCode title="Backend Development" className="hover:text-purple-500 transition duration-300" />
          <FaDatabase title="Database Management" className="hover:text-purple-500 transition duration-300" />
          <FaReact title="Frontend Integration" className="hover:text-purple-500 transition duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Home;
