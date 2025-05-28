import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume_Sajjad.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Rotate from "react-reveal/Rotate";

const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <div className="container-fluid home-container" id="home">
      <div className="theme-btn" onClick={handleTheme}>
        {theme === "light" ? (
          <BsFillMoonStarsFill size={30} />
        ) : (
          <BsFillSunFill size={30} />
        )}
      </div>
      <div className="container home-content">
        <Rotate>
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer!",
                  "Mern Stack Developer!",
                  "React native developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </Rotate>
        <Rotate>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=9764937392"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
            <a className="btn btn-cv" href={Resume} download="Sajjad.pdf">
              My Resume
            </a>
          </div>
        </Rotate>
      </div>
    </div>
  );
};

export default Home;
