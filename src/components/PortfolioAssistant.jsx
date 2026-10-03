import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  FaAddressCard,
  FaArrowRight,
  FaEllipsisH,
  FaPaperPlane,
  FaRobot,
  FaTimes,
  FaTrashAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { projects } from "../utiles/ExperienceAPI";
import { skills } from "../utiles/SkillApi";
import knowledge from "../data/portfolioKnowledge.json";
import "../styles/portfolioAssistant.css";

const ignoredWords = new Set([
  "about",
  "and",
  "are",
  "can",
  "does",
  "for",
  "his",
  "how",
  "is",
  "me",
  "tell",
  "the",
  "what",
  "where",
  "who",
  "with",
  "you",
  "your",
]);

const normalize = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const findAnswer = (question) => {
  const normalizedQuestion = normalize(question);
  const questionWords = normalizedQuestion
    .split(" ")
    .filter((word) => word.length > 2 && !ignoredWords.has(word));

  let bestAnswer = null;
  let bestScore = 0;

  knowledge.answers.forEach((answer) => {
    let score = 0;

    answer.keywords.forEach((keyword) => {
      const normalizedKeyword = normalize(keyword);
      const keywordWords = normalizedKeyword.split(" ");
      if (normalizedQuestion.includes(normalizedKeyword)) {
        score +=
          3 + keywordWords.filter((word) => !ignoredWords.has(word)).length * 2;
      } else {
        score += questionWords.filter((word) =>
          keywordWords.includes(word),
        ).length;
      }
    });

    if (score > bestScore) {
      bestAnswer = answer;
      bestScore = score;
    }
  });

  return bestAnswer || { response: knowledge.fallback };
};

const getResponse = (answer, question) => {
  if (answer.responseKey === "skills") {
    const matchedSkill = skills.find((skill) =>
      normalize(question).includes(normalize(skill.name)),
    );

    if (matchedSkill) {
      return `${matchedSkill.name}: ${matchedSkill.description}.`;
    }

    return `Sajjad's listed skills include ${skills
      .map((skill) => skill.name)
      .join(", ")}.`;
  }

  if (answer.responseKey === "projects") {
    const matchedProject = projects.find((project) =>
      normalize(question).includes(normalize(project.title)),
    );

    if (matchedProject) {
      return `${matchedProject.title}: ${matchedProject.description} Technologies include ${matchedProject.technologies.join(", ")}.`;
    }

    return `The portfolio features work such as ${projects
      .slice(0, 5)
      .map((project) => project.title)
      .join(", ")}, along with an inventory management system.`;
  }

  if (answer.responseKey === "experience") {
    return `The portfolio describes 8+ years of frontend and full-stack web development experience. Recent work includes ${projects
      .slice(0, 3)
      .map(
        (project) =>
          `${project.position} on ${project.title} (${project.duration})`,
      )
      .join("; ")}.`;
  }

  return answer.response;
};

const createMessage = (role, text, answer = null) => ({
  id: `${Date.now()}-${Math.random()}`,
  role,
  text,
  link: answer?.link || null,
});

const PortfolioAssistant = () => {
  const { isDarkMode } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    createMessage("assistant", knowledge.greeting),
  ]);
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const menuRef = useRef(null);
  const typingTimerRef = useRef(null);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (isMenuOpen) {
          setIsMenuOpen(false);
        } else {
          setIsOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) setIsMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isMenuOpen]);

  useEffect(
    () => () => {
      if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
    },
    [],
  );

  const sendMessage = (value) => {
    const question = value.trim();
    if (!question || isTyping) return;

    const answer = findAnswer(question);
    setMessages((currentMessages) => [
      ...currentMessages,
      createMessage("user", question),
    ]);
    setInput("");
    setIsTyping(true);
    typingTimerRef.current = window.setTimeout(() => {
      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage("assistant", getResponse(answer, question), answer),
      ]);
      setIsTyping(false);
      typingTimerRef.current = null;
    }, 650);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  const openLink = (path) => {
    navigate(path);
    setIsOpen(false);
    setIsMenuOpen(false);
  };

  const clearConversation = () => {
    if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
    typingTimerRef.current = null;
    setMessages([createMessage("assistant", knowledge.greeting)]);
    setInput("");
    setIsTyping(false);
    setIsMenuOpen(false);
  };

  return (
    <div className={`portfolio-assistant ${isDarkMode ? "is-dark" : ""}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            id="portfolio-assistant-panel"
            className="assistant-panel"
            role="dialog"
            aria-label="Portfolio assistant chat"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <header className="assistant-header">
              <div className="assistant-identity">
                <span className="assistant-avatar" aria-hidden="true">
                  <FaRobot />
                </span>
                <div>
                  <h2>Portfolio assistant</h2>
                  <p>
                    <span className="assistant-status-dot" /> Ask me about
                    Sajjad
                  </p>
                </div>
              </div>
              <div className="assistant-header-actions">
                <div className="assistant-menu-wrap" ref={menuRef}>
                  <button
                    className="assistant-icon-button"
                    type="button"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-label="Conversation options"
                    aria-expanded={isMenuOpen}
                    aria-haspopup="menu"
                    title="Conversation options"
                  >
                    <FaEllipsisH aria-hidden="true" />
                  </button>
                  <AnimatePresence>
                    {isMenuOpen && (
                      <motion.div
                        className="assistant-options-menu"
                        role="menu"
                        initial={{ opacity: 0, y: -5, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.98 }}
                        transition={{ duration: 0.14 }}
                      >
                        <button
                          type="button"
                          role="menuitem"
                          onClick={clearConversation}
                        >
                          <FaTrashAlt aria-hidden="true" />
                          Clear conversation
                        </button>
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => openLink("/contact")}
                        >
                          <FaAddressCard aria-hidden="true" />
                          Contact Sajjad
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <button
                  className="assistant-icon-button"
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsMenuOpen(false);
                  }}
                  aria-label="Close chat"
                  title="Close chat"
                >
                  <FaTimes aria-hidden="true" />
                </button>
              </div>
            </header>

            <div
              className="assistant-messages"
              aria-live="polite"
              aria-relevant="additions"
            >
              {messages.map((message) => (
                <div
                  className={`assistant-message assistant-message-${message.role}`}
                  key={message.id}
                >
                  {message.role === "assistant" && (
                    <span className="message-avatar" aria-hidden="true">
                      <FaRobot />
                    </span>
                  )}
                  <div className="message-content">
                    <p>{message.text}</p>
                    {message.link && (
                      <button
                        type="button"
                        className="assistant-link-button"
                        onClick={() => openLink(message.link.path)}
                      >
                        {message.link.label} <FaArrowRight aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="assistant-message assistant-typing-row">
                  <span className="message-avatar" aria-hidden="true">
                    <FaRobot />
                  </span>
                  <div
                    className="assistant-typing-indicator"
                    role="status"
                    aria-label="Assistant is preparing a reply"
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}
              {messages.length === 1 && !isTyping && (
                <div
                  className="assistant-suggestions"
                  aria-label="Suggested questions"
                >
                  {knowledge.suggestions.map((suggestion) => (
                    <button
                      type="button"
                      key={suggestion}
                      onClick={() => sendMessage(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="assistant-footer">
              <form className="assistant-form" onSubmit={handleSubmit}>
                <label className="visually-hidden" htmlFor="assistant-question">
                  Ask about Sajjad's portfolio
                </label>
                <input
                  id="assistant-question"
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about the portfolio..."
                  autoComplete="off"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  className="assistant-send-button"
                  disabled={!input.trim() || isTyping}
                  aria-label="Send message"
                >
                  <FaPaperPlane aria-hidden="true" />
                </button>
              </form>
              <p className="assistant-data-note">
                Answers are based on portfolio information
              </p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {!isOpen && (
        <button
          className="assistant-launcher"
          type="button"
          onClick={() => {
            setIsOpen(true);
            setIsMenuOpen(false);
          }}
          aria-label="Open portfolio assistant"
          aria-expanded={false}
          aria-controls="portfolio-assistant-panel"
        >
          <motion.span
            className="assistant-logo-mark"
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -2, 0], rotate: [0, -5, 0, 5, 0] }
            }
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="assistant-robot-antenna" />
            <span className="assistant-robot-face">
              <span className="assistant-robot-eyes">
                <span />
                <span />
              </span>
              <span className="assistant-robot-mouth" />
            </span>
          </motion.span>
        </button>
      )}
    </div>
  );
};

export default PortfolioAssistant;
