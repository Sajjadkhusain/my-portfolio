import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/hero.css";
import { FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdOutlineMailOutline } from "react-icons/md";

const Hero = () => {
  const resumeUrl = "/assets/resume.pdf";
  const navigate = useNavigate();
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const titleAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.3, 0.1, 0.3, 1],
      },
    },
  };

  const titleText = "Full Stack Developer";
  const handleWork = () => {
    navigate("/projects");
  };
  return (
    <div>
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="hero-text"
            >
              <motion.h3 variants={titleAnimation} className="hero-subtitle">
                Hi, I'm Sajjad Husain Khan
              </motion.h3>

              <motion.h1 className="hero-title">
                {titleText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterAnimation}
                    style={{ display: "inline-block" }}
                    whileHover={{
                      scale: 1.2,
                      color: "#3498db",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>

              <div className="description-container">
                <p className="hero-description">
                  I'm a passionate Full-Stack Web Developer with 7.6 years of
                  experience, skilled in building responsive, user-friendly
                  applications from front-end design to back-end logic. I
                  specialize in modern JavaScript frameworks, REST APIs, and
                  database integration, delivering clean, efficient, and
                  scalable solutions.
                </p>
              </div>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <div className="buttons-row">
                  <motion.a
                    whileHover={{
                      scale: 1.05,
                      background: "linear-gradient(90deg, #9b59b6, #3498db)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWork}
                    className="hero-btn contact-btn"
                  >
                    View My Work <FaLongArrowAltRight className="btn-icon" />
                  </motion.a>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      background: "linear-gradient(90deg, #9b59b6, #3498db)",
                      color: "white",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={downloadResume}
                    className="hero-btn resume-btn"
                  >
                    Download CV
                    <FiDownload className="btn-icon" />
                  </motion.button>
                </div>

                <motion.div
                  className="hero-social"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  {[
                    {
                      icon: <TiSocialLinkedinCircular />,
                      url: "https://www.linkedin.com/in/sajjad-husain-khan-980ba6a3/",
                    },
                    // {
                    //   icon: <FaGithub />,
                    //   url: "https://github.com/yourusername",
                    // },
                    {
                      icon: <MdOutlineMailOutline />,
                      url: "mailto:sajjadkhan5544@gmail.com",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{
                        y: -5,
                        scale: 1.1,
                        color: "#3498db",
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="hero-image-container"
            >
              <motion.div
                className="image-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/assets/khan1.jpeg"
                  alt="Sajjad Husain Khan"
                  className="hero-img"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiByeD0iMjAiIGZpbGw9IiNFM0UzRTMiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTUwIiByPSI3MCIgZmlsbD0iI0JEQkRCRCIvPjxyZWN0IHg9IjEyMCIgeT0iMjQwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwMCIgcng9IjEwIiBmaWxsPSIjQkRCREJEIi8+Cjwvc3ZnPgo=";
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
