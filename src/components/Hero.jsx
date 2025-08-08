import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaArrowDown,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "../styles/hero.css";

const Hero = () => {
  const resumeUrl = "/assets/resume.pdf";

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "developer_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Text animation variants
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

  const wordAnimation = {
    hidden: {},
    visible: {},
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

  // Split title into letters for animation
  const titleText = "Sajjad Husain Khan";
  const roleText = "Full Stack Developer";

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="hero-content"
        >
          <motion.h3 variants={titleAnimation} className="hero-subtitle">
            Hello, I'm
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

          <motion.h2 className="hero-role">
            {roleText.split(" ").map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                variants={wordAnimation}
                style={{ display: "inline-block", marginRight: "0.25em" }}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 0.5 + wordIndex * 0.1,
                }}
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={letterAnimation}
                    style={{ display: "inline-block" }}
                    custom={charIndex}
                    transition={{
                      delay: 0.5 + wordIndex * 0.1 + charIndex * 0.05,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p variants={titleAnimation} className="hero-description">
            Passionate about creating interactive applications and experiences
            on the web. I specialize in building responsive and performant web
            applications with modern technologies.
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Contact Me
            </motion.a>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#2c3e50",
                color: "white",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="hero-btn resume-btn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
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
              { icon: <FaLinkedin />, url: "https://linkedin.com" },
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
                transition={{ type: "spring", stiffness: 300 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="hero-image"
          whileHover={{ scale: 1.02 }}
        >
          <div className="image-wrapper">
            <motion.img
              src="/assets/profile.png"
              alt="Developer"
              className="profile-image"
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.03 }}
            />
            <motion.div
              className="image-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-down"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: [0, 1, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        onClick={scrollToNextSection}
      >
        <FaArrowDown className="scroll-icon" />
      </motion.div>
    </section>
  );
};

export default Hero;
