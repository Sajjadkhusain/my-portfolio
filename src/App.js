// import { lazy, Suspense, useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { motion } from "framer-motion";
// import Header from "./components/Header";
// import Loader from "./components/Loader";
// import "./App.css";

// const Home = lazy(() => import("./components/Hero"));
// const About = lazy(() => import("./components/About"));
// const Education = lazy(() => import("./components/Education"));
// const Skills = lazy(() => import("./components/Skills"));
// const Projects = lazy(() => import("./components/Projects"));
// const Experience = lazy(() => import("./components/Experience"));
// const Contact = lazy(() => import("./components/Contact"));

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <Router>
//       <div className="app">
//         <Header />
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Suspense fallback={<Loader />}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/education" element={<Education />} />
//               <Route path="/skills" element={<Skills />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/experience" element={<Experience />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </Suspense>
//         </motion.div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Loader from "./components/Loader";
import "./App.css";

const Home = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    // Simulate loading delay (you can adjust this)
    const timer = setTimeout(() => {
      handleComplete();
    }, 800);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Suspense fallback={<Loader />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="app">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
