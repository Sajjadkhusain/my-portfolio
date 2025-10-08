import { motion } from "framer-motion";
import "../styles/skills.css";
import { useTheme } from "../context/ThemeContext";
import { skills } from "../utiles/SkillApi";

const Skills = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const iconVariants = {
    hidden: { rotate: -180, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        delay: 0.2,
      },
    },
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className={`skills ${isDarkMode ? "skills-dark" : ""}`}
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
          Skills & Technologies
        </motion.h2>

        <motion.p
          className={`section-subtitle ${
            isDarkMode ? "section-subtitle-dark" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          A comprehensive overview of my technical skills and proficiencies
          across the full development stack
        </motion.p>

        <motion.div
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`skill-card ${isDarkMode ? "skill-card-dark" : ""}`}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="skill-icon"
                style={{ color: isDarkMode ? "#ffffff" : skill.color }}
                aria-hidden="true"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                {skill.icon}
              </motion.div>
              <motion.h3
                className={`skill-name ${isDarkMode ? "skill-name-dark" : ""}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {skill.name}
              </motion.h3>
              <motion.p
                className={`skill-description ${
                  isDarkMode ? "skill-description-dark" : ""
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
              >
                {skill.description}
              </motion.p>
              <div className="skill-progress-wrapper">
                <div
                  className={`skill-progress ${
                    isDarkMode ? "skill-progress-dark" : ""
                  }`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.1 + 0.5,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="progress-bar"
                    style={{
                      backgroundColor: isDarkMode ? "#ffffff" : skill.color,
                    }}
                    aria-label={`${skill.name} proficiency: ${skill.level}%`}
                  />
                </div>
                <motion.span
                  className={`progress-value ${
                    isDarkMode ? "progress-value-dark" : ""
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                >
                  {skill.level}%
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
