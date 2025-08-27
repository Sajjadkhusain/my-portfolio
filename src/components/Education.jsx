import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import "../styles/education.css";

const Education = () => {
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
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  // Icon animation variants
  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <motion.div
          className="education-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              whileHover="hover"
              className="education-card"
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
                  // <FaUniversity className="icon" />
                )}
              </motion.div>
              <div className="education-content">
                <motion.h3 className="education-degree" variants={textVariants}>
                  {edu.degree}
                </motion.h3>
                <motion.h4
                  className="education-institution"
                  variants={textVariants}
                  transition={{ delay: 0.1 }}
                >
                  {edu.institution}
                </motion.h4>
                <motion.span
                  className="education-year"
                  variants={textVariants}
                  transition={{ delay: 0.2 }}
                >
                  {edu.year}
                </motion.span>
                <motion.p
                  className="education-description"
                  variants={textVariants}
                  transition={{ delay: 0.3 }}
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
