import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaUserTie,
  FaMapMarkerAlt,
  FaBusinessTime,
} from "react-icons/fa";
import "../styles/experience.css";
import { useTheme } from "../context/ThemeContext";
import { projects } from "../utiles/ExperienceAPI";

const Experience = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="projects"
      className={`projects ${isDarkMode ? "projects-dark" : ""}`}
    >
      <div className="container">
        <motion.h2
          className={`section-titles ${
            isDarkMode ? "section-titles-dark" : ""
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          Professional Journey
        </motion.h2>

        <motion.h3
          className={`professional-summary ${
            isDarkMode ? "professional-summary-dark" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          8 years of frontend engineering experience across responsive user
          interfaces, performant web applications, and interactive user
          experiences
        </motion.h3>

        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`project-card ${
                isDarkMode ? "project-card-dark" : ""
              }`}
            >
              <div className="project-content">
                <div className="project-header">
                  {project.icon}
                  <h3
                    className={`project-title ${
                      isDarkMode ? "project-title-dark" : ""
                    }`}
                  >
                    {project.title}
                  </h3>
                </div>
                <hr />
                <p
                  className={`project-description ${
                    isDarkMode ? "project-description-dark" : ""
                  }`}
                >
                  {project.description}
                </p>

                <div className="project-technologies">
                  <h4
                    className={`tech-title ${
                      isDarkMode ? "tech-title-dark" : ""
                    }`}
                  >
                    Technologies Used
                  </h4>
                  <div className="project-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`tag ${isDarkMode ? "tag-dark" : ""}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-features">
                  <h4
                    className={`features-title ${
                      isDarkMode ? "features-title-dark" : ""
                    }`}
                  >
                    Key Features
                  </h4>
                  <ul className="features-list">
                    {project.keyFeatures.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`feature-item ${
                          isDarkMode ? "feature-item-dark" : ""
                        }`}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Footer with Duration and Position */}
                <hr />
                <div
                  className={`project-footer ${
                    isDarkMode ? "project-footer-dark" : ""
                  }`}
                >
                  <div className="footer-item">
                    <FaCalendarAlt className="footer-icon" />
                    <span className="footer-text">{project.duration}</span>
                  </div>
                  <div className="footer-item">
                    <FaUserTie className="footer-icon" />
                    <span className="footer-text">{project.position}</span>
                  </div>
                  <div className="footer-item">
                    <FaMapMarkerAlt className="footer-icon" />
                    <span className="footer-text">{project.location}</span>
                  </div>
                  <div className="footer-item">
                    <FaBusinessTime className="footer-icon" />
                    <span className="footer-text">
                      {project.employmentType}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
