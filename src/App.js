import React from "react";
import Layout from "./components/Layouts/layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Educations/Education";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
// import Tada from "react-reveal/Tada";
import WorkExp from "./pages/WorkExp/WorkExp";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
const App = () => {
  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          {/* <Tada> */}
          <h4 style={{ textAlign: "center" }}>Technoforcast! &copy; 2025</h4>
          {/* </Tada> */}
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
};

export default App;
