import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiTypescript } from "react-icons/si";
import "../styles/skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
    { name: "JavaScript", icon: <FaJs />, level: 85 },
    { name: "React", icon: <FaReact />, level: 85 },
    { name: "Node.js", icon: <FaNodeJs />, level: 80 },
    { name: "Express", icon: <SiExpress />, level: 75 },
    { name: "MongoDB", icon: <SiMongodb />, level: 70 },
    { name: "Git", icon: <FaGitAlt />, level: 85 },
    { name: "Redux", icon: <SiRedux />, level: 75 },
    { name: "TypeScript", icon: <SiTypescript />, level: 70 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="skill-card"
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-progress">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="progress-bar"
                  style={{ width: `${skill.level}%` }}
                ></motion.div>
                <span className="progress-value">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
