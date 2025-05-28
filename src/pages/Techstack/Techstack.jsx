import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";
// import RubberBand from "react-reveal/RubberBand";
// import Shake from "react-reveal/Shake";
const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="technology">
        {/* <RubberBand> */}
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technologies stack
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Including programming Languages, Frameworks, Database, Front-end
          and Backend tools, and APIs
        </p>
        {/* </RubberBand> */}
        <div className="row">
          {TechstackList.map((tech) => (
            // <Shake>
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            // </Shake>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
