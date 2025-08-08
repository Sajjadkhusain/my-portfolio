import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import "../styles/education.css";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Tech University",
      year: "2020 - 2022",
      description:
        "Specialized in Web Technologies and Artificial Intelligence. Completed with honors.",
    },
    {
      id: 2,
      degree: "Bachelor of Computer Engineering",
      institution: "State University",
      year: "2016 - 2020",
      description:
        "Focus on Software Development and Database Management. Graduated with distinction.",
    },
    {
      id: 3,
      degree: "High School Diploma",
      institution: "City High School",
      year: "2014 - 2016",
      description:
        "Specialized in Mathematics and Computer Science. Active participant in coding competitions.",
    },
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-container">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="education-card"
            >
              <div className="education-icon">
                {index === 0 ? (
                  <FaGraduationCap className="icon" />
                ) : (
                  <FaUniversity className="icon" />
                )}
              </div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <span className="education-year">{edu.year}</span>
                <p className="education-description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
