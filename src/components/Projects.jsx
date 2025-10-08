// import { motion } from "framer-motion";
// import { FaCalendarAlt, FaUserTie } from "react-icons/fa";
// import "../styles/projects.css";
// import { useTheme } from "../context/ThemeContext";
// import { projects } from "../components/ProjectAPI";

// const Projects = () => {
//   const { isDarkMode } = useTheme();

//   return (
//     <section
//       id="projects"
//       className={`projects ${isDarkMode ? "projects-dark" : ""}`}
//     >
//       <div className="container">
//         {/* <h2
//           className={`section-title ${isDarkMode ? "section-title-dark" : ""}`}
//         >

//         </h2> */}
//         <motion.h2
//           className={`section-titles ${
//             isDarkMode ? "section-titles-dark" : ""
//           }`}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true, margin: "-50px" }}
//         >
//           Recent Projects
//         </motion.h2>

//         <div className="projects-container">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className={`project-card ${
//                 isDarkMode ? "project-card-dark" : ""
//               }`}
//             >
//               <div className="project-content">
//                 <div className="project-header">
//                   {project.icon}
//                   <h3
//                     className={`project-title ${
//                       isDarkMode ? "project-title-dark" : ""
//                     }`}
//                   >
//                     {project.title}
//                   </h3>
//                 </div>
//                 <hr />
//                 <p
//                   className={`project-description ${
//                     isDarkMode ? "project-description-dark" : ""
//                   }`}
//                 >
//                   {project.description}
//                 </p>

//                 <div className="project-technologies">
//                   <h4
//                     className={`tech-title ${
//                       isDarkMode ? "tech-title-dark" : ""
//                     }`}
//                   >
//                     Technologies Used
//                   </h4>
//                   <div className="project-tags">
//                     {project.technologies.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className={`tag ${isDarkMode ? "tag-dark" : ""}`}
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="project-features">
//                   <h4
//                     className={`features-title ${
//                       isDarkMode ? "features-title-dark" : ""
//                     }`}
//                   >
//                     Key Features
//                   </h4>
//                   <ul className="features-list">
//                     {project.keyFeatures.map((feature, featureIndex) => (
//                       <li
//                         key={featureIndex}
//                         className={`feature-item ${
//                           isDarkMode ? "feature-item-dark" : ""
//                         }`}
//                       >
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Project Footer with Duration and Position */}
//                 <hr />
//                 <div
//                   className={`project-footer ${
//                     isDarkMode ? "project-footer-dark" : ""
//                   }`}
//                 >
//                   <div className="footer-item">
//                     <FaCalendarAlt className="footer-icon" />
//                     <span className="footer-text">{project.duration}</span>
//                   </div>
//                   <div className="footer-item">
//                     <FaUserTie className="footer-icon" />
//                     <span className="footer-text">{project.position}</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";
import "../styles/projects.css";

const Projects = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "2021 - Present",
      responsibilities: [
        "Lead a team of 5 developers in building responsive web applications",
        "Implemented new features using React and Redux",
        "Optimized application performance reducing load time by 40%",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Digital Creations",
      duration: "2019 - 2021",
      responsibilities: [
        "Developed and maintained web applications using MERN stack",
        "Collaborated with designers to implement UI/UX improvements",
        "Integrated third-party APIs and payment gateways",
        "Participated in agile development process",
      ],
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "WebStart Agency",
      duration: "2018 - 2019",
      responsibilities: [
        "Built responsive websites using HTML, CSS, and JavaScript",
        "Assisted in backend development with Node.js",
        "Fixed bugs and implemented small features",
        "Participated in client meetings and requirement gathering",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="experience-container">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="experience-card"
            >
              <div className="experience-icon">
                {index === 0 ? (
                  <FaLaptopCode className="icon" />
                ) : (
                  <FaBriefcase className="icon" />
                )}
              </div>
              <div className="experience-content">
                <h3 className="experience-role">{exp.role}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                <span className="experience-duration">{exp.duration}</span>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <motion.li
                      key={respIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: respIndex * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
