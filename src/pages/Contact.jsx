import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        "service_ncpbuv4", 
        "template_fjkz31l", 
        e.target, // Form element
        "ZPQnBTCGFxc0tgidb" 
      );

      console.log(result.text);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error.text);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center"
    >
      {/* Contact Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-purple-400 mb-8"
      >
        Get in Touch
      </motion.h2>

      {/* Contact Form */}
      <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg border border-purple-500 w-full max-w-2xl">
        <h3 className="text-2xl font-semibold text-purple-400 mb-4">Contact Form</h3>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-green-500"
          >
            <p className="text-xl">Thank you for reaching out! I will get back to you soon.</p>
            <motion.a
              href="/"
              className="text-purple-400 hover:text-purple-500 mt-4 inline-block text-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Back to Homepage
            </motion.a>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-400 font-medium"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 bg-[#2A2A2A] border border-purple-500 rounded-md text-white focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-400 font-medium"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 bg-[#2A2A2A] border border-purple-500 rounded-md text-white focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-400 font-medium"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 bg-[#2A2A2A] border border-purple-500 rounded-md text-white focus:outline-none"
                placeholder="Write your message"
                rows="6"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-400 text-white font-semibold rounded-md hover:bg-purple-500 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="animate-spin w-5 h-5 mx-auto border-4 border-t-4 border-purple-400 rounded-full"></div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
      </div>

      {/* Social Links */}
      <div className="mt-8 flex justify-center space-x-6">
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
        <motion.a
          href="mailto:barasamicah@gmail.com"
          className="text-purple-400 hover:text-purple-500 text-3xl"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <FaEnvelope />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Contact;
