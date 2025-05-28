import React from "react";
import "./About.css";
// import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      {/* <Jump> */}
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src="/image/khan.png" alt="profile pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              deserunt eius incidunt sed quos laborum modi earum voluptates,
              soluta temporibus doloremque, iusto provident necessitatibus atque
              animi repudiandae quidem debitis explicabo possimus, optio dicta
              modi! Dolore quos quaerat voluptatibus, mollitia totam animi,
              quaerat porro, fugit numquam, soluta culpa eligendi recusandae
              deleniti obcaecati modi! Cum ipsam repellat fugit, tempore,
              accusantium excepturi enim dignissimos ab necessitatibus impedit
              labore voluptate ullam neque. Recusandae quas provident soluta
              magni, id ad nobis inventore eveniet neque optio qui mollitia
              veritatis in, tempora corrupti eius, iste cupiditate saepe
              commodi. Deserunt ad ab quod quibusdam impedit ea a veritatis
              maxime assumenda animi, placeat quia distinctio perspiciatis
              facere temporibus cumque labore deleniti praesentium modi error
              ipsam. Assumenda!
            </p>
          </div>
        </div>
      </div>
      {/* </Jump> */}
    </>
  );
};

export default About;
