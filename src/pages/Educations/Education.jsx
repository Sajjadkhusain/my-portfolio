import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-revamped";
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2011 - 2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">MCA</h3>
            <h4 className="vertical-timeline-element-subtitle">
              AIMS Pune, IN
            </h4>
            {/* <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2017 - 2020"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BCA</h3>
            <h4 className="vertical-timeline-element-subtitle">
              SMT.Meherbanu AKOLA, IN
            </h4>
            {/* <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p> */}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
