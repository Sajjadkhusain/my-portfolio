import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import "../styles/ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="not-found-section">
      <div className="not-found-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="not-found-content"
        >
          <div className="error-message-container">
            <h2 className="error-code">
              <span className="error-number gradient-text">404</span>
              <span className="separator"> | </span>
              <span className="error-text gradient-text">
                This Page Could Not Be Found.
              </span>
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ErrorPage;
