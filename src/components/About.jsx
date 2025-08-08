import { motion } from "framer-motion";
import "../styles/about.css";

const About = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "Responsive Design",
    "UI/UX",
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-image"
          >
            <img
              src="/assets/profile.png"
              alt="About Me"
              className="about-img"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h3 className="about-subtitle">Who am I?</h3>
            <p className="about-description">
              I'm a passionate Full Stack Developer with 3+ years of experience
              in creating web applications. I specialize in JavaScript
              technologies across the whole stack (React.js, Node.js,
              Express.js, MongoDB).
            </p>
            <p className="about-description">
              My journey in web development started in college when I built my
              first website. Since then, I've worked on various projects,
              collaborated with talented people, and continuously improved my
              skills.
            </p>
            <p className="about-description">
              When I'm not coding, you'll find me hiking, reading tech blogs, or
              experimenting with new technologies.
            </p>

            <div className="about-skills">
              <h4 className="skills-title">Here are my skills:</h4>
              <ul className="skills-list">
                {skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="skill-item"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
