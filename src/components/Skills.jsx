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
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      level: 95,
      color: "#E34F26",
      description: "Semantic markup, accessibility, modern HTML5 APIs",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      level: 90,
      color: "#1572B6",
      description: "Flexbox, Grid, animations, responsive design",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      level: 85,
      color: "#F7DF1E",
      description: "ES6+, DOM manipulation, async programming",
    },
    {
      name: "React",
      icon: <FaReact />,
      level: 85,
      color: "#61DAFB",
      description: "Hooks, Context API, component lifecycle",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      level: 80,
      color: "#339933",
      description: "REST APIs, Express, middleware, NPM",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      level: 75,
      color: "#000000",
      description: "Web applications, APIs, middleware, routing",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: 70,
      color: "#47A248",
      description: "NoSQL, Mongoose, data modeling, aggregation",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      level: 85,
      color: "#F05032",
      description: "Version control, branching, collaboration",
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      level: 75,
      color: "#764ABC",
      description: "State management, actions, reducers, middleware",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      level: 70,
      color: "#3178C6",
      description: "Static typing, interfaces, generics",
    },
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-titles"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          className="section-subtitle"
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
              className="skill-card"
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
            >
              <div
                className="skill-icon"
                style={{ color: skill.color }}
                aria-hidden="true"
              >
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-progress-wrapper">
                <div className="skill-progress">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="progress-bar"
                    style={{ backgroundColor: skill.color }}
                    aria-label={`${skill.name} proficiency: ${skill.level}%`}
                  />
                </div>
                <span className="progress-value">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
