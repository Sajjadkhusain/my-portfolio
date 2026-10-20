import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import "../styles/backToTop.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 200);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <motion.button
      className="back-to-top"
      type="button"
      onClick={scrollToTop}
      disabled={!isVisible}
      aria-label="Scroll to top"
      title="Scroll to top"
      initial={false}
      animate={
        isVisible
          ? { opacity: 1, scale: 1, y: shouldReduceMotion ? 0 : [0, -5, 0] }
          : { opacity: 0, scale: 0.7, y: 12 }
      }
      transition={
        isVisible && !shouldReduceMotion
          ? {
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
              y: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
            }
          : { duration: 0.2 }
      }
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <FaArrowUp aria-hidden="true" />
    </motion.button>
  );
};

export default BackToTop;
