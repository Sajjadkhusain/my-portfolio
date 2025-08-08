import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";
import "../styles/experience.css";

const Experience = () => {
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

export default Experience;
