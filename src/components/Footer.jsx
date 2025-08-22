import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-about">
            <h3 style={{ color: "#3498db" }}>Sajjad Husain Khan</h3>
            <p>
              Full Stack Developer specializing in modern web technologies.
              Building responsive, scalable applications with clean code and
              intuitive user experiences.
            </p>
          </div>

          <div className="footer-links">
            <h4 style={{ color: "#3498db" }}>Quick Links</h4>
            <div className="links-columns">
              <ul className="links-column">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/skills">Skills</Link>
                </li>
                <li>
                  <Link to="/experience">Experience</Link>
                </li>
                <li>
                  <Link to="/education">Education</Link>
                </li>
              </ul>
              <ul className="links-column">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-contact">
            <h4 style={{ color: "#3498db" }}>Contact Me</h4>
            <ul>
              <li>
                <FaEnvelope className="contact-icon" /> sajjadkhan55@gmail.com
              </li>
              <li>
                <FaPhoneAlt className="contact-icon" /> +91 9764937392
              </li>
              <li>
                <MdLocationPin className="contact-icon" />
                Akola,Maharashtra, India
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          {/* <div className="social-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
          </div> */}
          <p>
            &copy; {new Date().getFullYear()} Sajjad Husain Khan. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
