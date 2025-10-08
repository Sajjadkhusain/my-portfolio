import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiTypescript } from "react-icons/si";

export const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    level: 95,
    color: "#E34F26",
    description: "Semantic markup, accessibility, modern HTML5 APIs",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    level: 90,
    color: "#1572B6",
    description: "Flexbox, Grid, animations, responsive design",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    level: 85,
    color: "#F7DF1E",
    description: "ES6+, DOM manipulation, async programming",
  },
  {
    name: "React",
    icon: <FaReact />,
    level: 85,
    color: "#61DAFB",
    description: "Hooks, Context API, component lifecycle",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    level: 80,
    color: "#339933",
    description: "REST APIs, Express, middleware, NPM",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    level: 75,
    color: "#000000",
    description: "Web applications, APIs, middleware, routing",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    level: 70,
    color: "#47A248",
    description: "NoSQL, Mongoose, data modeling, aggregation",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    level: 85,
    color: "#F05032",
    description: "Version control, branching, collaboration",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    level: 75,
    color: "#764ABC",
    description: "State management, actions, reducers, middleware",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    level: 70,
    color: "#3178C6",
    description: "Static typing, interfaces, generics",
  },
];
