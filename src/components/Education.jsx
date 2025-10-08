import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import "../styles/education.css";
import { useTheme } from "../context/ThemeContext";

const Education = () => {
  const { isDarkMode } = useTheme();

  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Applications",
      institution: "Savitribai Phule Pune University",
      year: "2014 - 2016",
      description:
        "Master of Computer Applications (MCA) with a specialization in Web Technologies, focused on software development, modern web frameworks, and dynamic web application design.",
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications",
      institution: "Sant Gadge Baba Amravati University ",
      year: "2011 - 2014",
      description:
        "Bachelor of Computer Applications (BCA) with a strong foundation in programming, database management, and web development.",
    },
    {
      id: 3,
      degree: "Higher Secondary Certificate",
      institution:
        "Maharashtra State Board of Secondary and Higher Secondary Education",
      year: "2008 - 2009",
      description:
        "Higher Secondary Certificate (HSC) with a focus on Science stream subjects including Physics, Chemistry, Mathematics, and English.",
    },
    {
      id: 4,
      degree: "Secondary School Certificate",
      institution:
        "Maharashtra State Board of Secondary and Higher Secondary Education",
      year: "2006 - 2007",
      description:
        "Secondary School Certificate (SSC) with a focus on core subjects including Mathematics, Science, and English.",
    },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
    hover: {
      y: -8,
      // boxShadow: isDarkMode
      //   ? "0 10px 25px rgba(0, 0, 0, 0.3)"
      //   : "0 10px 25px rgba(52, 152, 219, 1)",
      // borderColor: isDarkMode ? "#364458" : "#3498db",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  // Icon animation variants with 360 rotation
  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        duration: 0.6,
      },
    },
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="education"
      className={`education ${isDarkMode ? "education-dark" : ""}`}
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
          Education
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          A continuous journey of gaining knowledge, developing skills, and
          shaping a better future.
        </motion.p>
        <motion.div
          className="education-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              whileHover="hover"
              className={`education-card ${
                isDarkMode ? "education-card-dark" : ""
              }`}
            >
              <motion.div
                className="education-icon"
                variants={iconVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
              >
                {index === 0 || index === 1 ? (
                  <FaGraduationCap className="icon" />
                ) : (
                  <GiOpenBook className="icon" />
                )}
              </motion.div>
              <div className="education-content">
                <motion.h3
                  className={`education-degree ${
                    isDarkMode ? "education-degree-dark" : ""
                  }`}
                  variants={textVariants}
                >
                  {edu.degree}
                </motion.h3>
                <motion.h4
                  className="education-institution"
                  variants={textVariants}
                  transition={{ delay: 0.05 }}
                >
                  {edu.institution}
                </motion.h4>
                <motion.span
                  className={`education-year ${
                    isDarkMode ? "education-year-dark" : ""
                  }`}
                  variants={textVariants}
                  transition={{ delay: 0.1 }}
                >
                  {edu.year}
                </motion.span>
                <motion.p
                  className={`education-description ${
                    isDarkMode ? "education-description-dark" : ""
                  }`}
                  variants={textVariants}
                  transition={{ delay: 0.15 }}
                >
                  {edu.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
