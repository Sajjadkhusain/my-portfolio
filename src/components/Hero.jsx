import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
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

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h3 className="hero-subtitle">Hello, I'm</h3>
          <h1 className="hero-title">John Doe</h1>
          <h2 className="hero-role">Full Stack Developer</h2>
          <p className="hero-description">
            Passionate about creating interactive applications and experiences
            on the web. I specialize in building responsive and performant web
            applications with modern technologies.
          </p>

          <div className="hero-buttons">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="hero-btn contact-btn"
            >
              Contact Me
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="hero-btn resume-btn"
            >
              <FaFileDownload className="btn-icon" />
              Download CV
            </motion.button>
          </div>

          <div className="hero-social">
            <motion.a
              whileHover={{ y: -5 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="social-icon" />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="social-icon" />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href="mailto:john.doe@example.com"
              aria-label="Email"
            >
              <HiMail className="social-icon" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image"
        >
          <div className="image-wrapper">
            <img
              src="/assets/profile.png"
              alt="Developer"
              className="profile-image"
            />
            <div className="image-border"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
