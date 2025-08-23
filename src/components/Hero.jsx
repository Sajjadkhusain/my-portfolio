import { motion } from "framer-motion";
import { FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdOutlineMailOutline } from "react-icons/md";
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

  const imageAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const titleText = "Full Stack Developer";

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-image"
          variants={imageAnimation}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="image-wrapper"
            variants={floatingAnimation}
            initial="animate"
            animate="animate"
          >
            <motion.img
              src="/assets/khan1.jpeg"
              alt="Sajjad Husain Khan"
              className="profile-image"
              loading="lazy"
              whileHover={{
                scale: 1.05,
                rotate: 1,
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>
        </motion.div>

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

          <motion.p
            variants={titleAnimation}
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            I'm a passionate Full-Stack Web Developer with 7.6 years of
            experience, skilled in building responsive, user-friendly
            applications from front-end design to back-end logic. I specialize
            in modern JavaScript frameworks, REST APIs, and database
            integration, delivering clean, efficient, and scalable solutions.
          </motion.p>

          <motion.div
            variants={titleAnimation}
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
                href="#contact"
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
                {
                  icon: <MdOutlineMailOutline />,
                  url: "mailto:sajjadkhan55@gmail.com",
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
      </div>
    </section>
  );
};

export default Hero;
