import { motion } from "framer-motion";
import "../styles/about.css";
import { useTheme } from "../context/ThemeContext.js"; // Import the useTheme hook

const About = () => {
  const { isDarkMode } = useTheme(); // Get the current theme state

  return (
    <section id="about" className={`about ${isDarkMode ? "dark" : ""}`}>
      <div className="container">
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h3 className={`about-subtitle ${isDarkMode ? "dark" : ""}`}>
              Sajjad Husain Khan
            </h3>
            <div className="description-container">
              <p className="about-description">
                I'm a passionate Full Stack Developer with 8+ years of
                experience in creating web applications. I specialize in
                JavaScript technologies across the whole stack (React.js,
                Node.js, Express.js, MongoDB).
              </p>
              <p className="about-description">
                My journey in web development started in college when I built my
                first website. Since then, I've worked on various projects,
                collaborated with talented people, and continuously improved my
                skills.
              </p>
              <p className="about-description">
                When I'm not coding, you'll find me hiking, reading tech blogs,
                or experimenting with new technologies.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="about-image-container"
          >
            <motion.div
              className={`image-card ${isDarkMode ? "dark" : ""}`}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/assets/khan.jpeg"
                alt="Sajjad Husain Khan"
                className="about-img"
                onError={(e) => {
                  e.target.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiByeD0iMjAiIGZpbGw9IiNFM0UzRTMiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTUwIiByPSI3MCIgZmlsbD0iI0JEQkRCRCIvPjxyZWN0IHg9IjEyMCIgeT0iMjQwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwMCIgcng9IjEwIiBmaWxsPSIjQkRCREJEIi8+Cjwvc3ZnPgo=";
                }}
              />
              <motion.div
                className={`experience-badge ${isDarkMode ? "dark" : ""}`}
                // className="experience-badge"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="years">8+</span>
                <span className="text">Years</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
