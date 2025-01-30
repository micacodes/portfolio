import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import classiConnectImg from '../assets/Screenshot from 2025-01-30 09-55-41.png';
import freshMartImg from '../assets/Screenshot from 2025-01-30 10-35-09.png';

const projects = [
  {
    title: "ClassiConnect",
    description: "A platform connecting students and vendors with ease.",
    image: classiConnectImg,
    liveLink: "https://classi-connect.vercel.app/",
    githubLink: "", // Add GitHub link if available
  },
  {
    title: "FreshMart",
    description: "An online grocery store with a seamless shopping experience.",
    image: freshMartImg,
    liveLink: "https://freshmart-plum.vercel.app/",
    githubLink: "", // Add GitHub link if available
  },
  {
    title: "Coming soon",
    description: "",
    image: "", // Import and add image path
    liveLink: "",
    githubLink: "",
  },
  {
    title: "Coming soon after deployment",
    description: "",
    image: "", // Import and add image path
    liveLink: "",
    githubLink: "",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-purple-400 mb-6"
      >
        Projects Showcase
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1E1E1E] border border-purple-500 rounded-xl p-3 shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl"
          >
            {project.image && (
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
              />
            )}
            <h3 className="text-xl font-semibold text-purple-400">{project.title}</h3>
            {project.description && (
              <p className="text-gray-300 mt-2 text-sm">{project.description}</p>
            )}
            <div className="mt-4 flex space-x-3">
              {project.liveLink && (
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 flex items-center space-x-2 hover:text-purple-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaExternalLinkAlt /> <span>Live Demo</span>
                </motion.a>
              )}
              {project.githubLink && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 flex items-center space-x-2 hover:text-purple-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaGithub /> <span>GitHub</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
