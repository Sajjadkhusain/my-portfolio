import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "../styles/hero.css";

const Hero = () => {
  const resumeUrl = "/assets/resume.pdf";

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  const titleText = "Full Stack Developer";

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-image">
          <div className="image-wrapper">
            <img
              src="/assets/sajjad.png"
              alt="Sajjad Husain Khan"
              className="profile-image"
              loading="lazy"
            />
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="hero-content"
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
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p variants={titleAnimation} className="hero-description">
            I'm a passionate Full-Stack Web Developer with 7.6 years of
            experience, skilled in building responsive, user-friendly
            applications from front-end design to back-end logic. I specialize
            in modern JavaScript frameworks, REST APIs, and database
            integration, delivering clean, efficient, and scalable solutions.
          </motion.p>

          <motion.div variants={titleAnimation} className="hero-buttons">
            <motion.a
              whileHover={{
                scale: 1.05,
                background: "linear-gradient(90deg, #9b59b6, #3498db)",
              }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="hero-btn contact-btn"
            >
              View My Work <FaLongArrowAltRight className="btn-icon" />
            </motion.a>
            <motion.button
              whileHover={{
                scale: 1.05,
                // backgroundColor: "#2c3e50",
                background: "linear-gradient(90deg, #9b59b6, #3498db)",
                color: "white",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="hero-btn resume-btn"
            >
              <FaFileDownload className="btn-icon" />
              Download CV
            </motion.button>
          </motion.div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {[
              { icon: <FaGithub />, url: "https://github.com" },
              {
                icon: <FaLinkedin />,
                url: "https://www.linkedin.com/in/sajjad-husain-khan-980ba6a3/",
              },
              { icon: <HiMail />, url: "mailto:sajjadkhan55@gmail.com" },
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
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
