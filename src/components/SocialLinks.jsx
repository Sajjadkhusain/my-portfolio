import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/socialLinks.css";

const SocialLinks = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub />,
      url: "https://github.com/yourusername",
      name: "GitHub",
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yourusername",
      name: "LinkedIn",
    },
    {
      id: 3,
      icon: <FaTwitter />,
      url: "https://twitter.com/yourusername",
      name: "Twitter",
    },
    {
      id: 4,
      icon: <FaInstagram />,
      url: "https://instagram.com/yourusername",
      name: "Instagram",
    },
  ];

  return (
    <div className="social-links">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          aria-label={link.name}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
