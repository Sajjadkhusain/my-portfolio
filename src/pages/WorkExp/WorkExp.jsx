import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-revamped";
import { SiReact } from "react-icons/si";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            WORK EXPERIENCE
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2011 - 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Senior Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                ATMECS Hyderabad, IN
              </h4>
              {/* <p>
                        Creative Direction, User Experience, Visual Design, Project~
                        Management, Team Leading
                      </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2011 - 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Senior Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                ATMECS Hyderabad, IN
              </h4>
              {/* <p>
                        Creative Direction, User Experience, Visual Design, Project
                        Management, Team Leading
                      </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2011 - 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Senior Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                ATMECS Hyderabad, IN
              </h4>
              {/* <p>
                        Creative Direction, User Experience, Visual Design, Project
                        Management, Team Leading
                      </p> */}
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
