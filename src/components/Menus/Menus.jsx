import React from "react";
import "./Menus.css";
// import Zoom from "react-reveal/Zoom";
// import Roll from "react-reveal/Roll";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcBusinessContact,
} from "react-icons/fc";
import { Link } from "react-scroll";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          {/* <Zoom> */}
          <div className="navbar-profile-pic">
            <img
              src="/image/khan.png"
              alt="profile pic"
              className="profile-pic"
            />
          </div>
          {/* </Zoom>
          <Roll> */}
          <div className="navbar-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome /> Home
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout /> About
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReadingEbook /> Education
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="technology"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech /> Tech Stack
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector /> Projects
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPortraitMode /> Work Experince
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact /> Contact
                </Link>
              </div>
            </div>
          </div>
          {/* </Roll> */}
        </>
      ) : (
        <>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcHome title="Home" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAbout title="About" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcReadingEbook title="Education" />
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="technology"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBiotech title="Tech Stack" />
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcVideoProjector title="Projects" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcPortraitMode title="Work Experince" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBusinessContact title="Contact" />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
