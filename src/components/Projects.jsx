import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce application with React, Node.js, and MongoDB. Features include product catalog, shopping cart, user authentication, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity application for managing tasks and projects. Includes drag-and-drop functionality, team collaboration features, and real-time updates.",
      tags: ["React", "Firebase", "Material UI", "React DnD"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather application that displays current and forecasted weather data for any location. Uses the OpenWeatherMap API and geolocation services.",
      tags: ["JavaScript", "API Integration", "CSS3", "HTML5"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://via.placeholder.com/600x400",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Recent Projects</h2>

        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub className="link-icon" /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt className="link-icon" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
