import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-titles"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          Got an idea or project you'd like to explore? I'd be happy to connect.
          Together, we can build something great.
        </motion.p>

        <div className="contact-container">
          {/* Left Column - Contact Info and Availability Cards */}
          <div className="left-column">
            {/* Contact Information Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-50px" }}
              className="contact-card"
            >
              <h3 className="contact-subtitle">Get in Touch</h3>
              <div className="card-divider"></div>

              <ul className="contact-details">
                <motion.li
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="detail-item"
                >
                  <div className="icon-wrapper">
                    <FaMapMarkerAlt className="contact-icons" />
                  </div>
                  <span className="detail-value">Akola, India</span>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="detail-item"
                >
                  <div className="icon-wrapper">
                    <FaPhone className="contact-icons" />
                  </div>
                  <span className="detail-value">+91 9764937392</span>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="detail-item"
                >
                  <div className="icon-wrapper">
                    <FaEnvelope className="contact-icons" />
                  </div>
                  <span className="detail-value">sajjadkhan5544@gmail.com</span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="contact-card availability-card"
            >
              <h3 className="contact-subtitle">Current Availability</h3>
              <div className="card-divider"></div>

              <div className="availability-content">
                <div className="availability-status">
                  <div className="status-indicator">
                    <div className="green-circle"></div>
                    <span>Available for new opportunities</span>
                  </div>
                </div>
                <p className="availability-description">
                  I'm currently accepting new and exciting opportunities and
                  would love to discuss how we can work together to achieve
                  great results.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="contact-card form-card"
          >
            <div className="card-header">
              <h3 className="contact-subtitle">Send a Message</h3>
              <div className="card-divider"></div>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="loading-spinner"></div>
                ) : (
                  <>
                    <FaPaperPlane className="btn-icon" />
                    Send Message
                  </>
                )}
              </motion.button>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="submit-success"
                >
                  <span className="success-check">✓</span>
                  Message sent successfully!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
