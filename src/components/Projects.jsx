import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import projects from "../data/projects.json";
import "../styles/education.css";
import "../styles/projects.css";

const Projects = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className={`education projects-education ${
        isDarkMode ? "education-dark" : ""
      }`}
    >
      <div className="container">
        <motion.h2
          className={`education-title ${
            isDarkMode ? "education-title-dark" : ""
          }`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Selected projects and products from Sajjad's professional journey.
        </motion.p>

        <motion.div
          className="education-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`education-card ${
                isDarkMode ? "education-card-dark" : ""
              }`}
            >
              <motion.div
                className="education-icon"
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ rotate: 12, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
                viewport={{ once: true }}
                aria-hidden="true"
              >
                <FaLaptopCode className="icon" />
              </motion.div>

              <div className="education-content">
                <h3
                  className={`education-degree ${
                    isDarkMode ? "education-degree-dark" : ""
                  }`}
                >
                  {project.title}
                </h3>
                <h4 className="education-institution">{project.position}</h4>
                <span
                  className={`education-year ${
                    isDarkMode ? "education-year-dark" : ""
                  }`}
                >
                  {project.date}
                </span>
                <p
                  className={`education-description project-description ${
                    isDarkMode ? "education-description-dark" : ""
                  }`}
                >
                  {project.description}
                </p>
                <ul
                  className={`project-technologies ${
                    isDarkMode ? "project-technologies-dark" : ""
                  }`}
                  aria-label="Project technologies"
                >
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
