import React, { useState } from "react";
import "./Contact.css";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
// import Rotate from "react-reveal/Rotate";
// import LightSpeed from "react-reveal/LightSpeed";
import { toast } from "react-toastify";
// import axios from "axios";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");

  // const handleSubmit = async (e) => {
  //   console.log("client", name, email, msg);
  //   e.preventDefault();
  //   try {
  //     if (!name || !email || !msg) {
  //       toast.error("Please Provide All Fields!");
  //     }
  //     const res = await axios.post("/api/v1/portfolio/sendEmail", {
  //       name,
  //       email,
  //       msg,
  //     });
  //     //validation
  //     if (res.data.success) {
  //       toast.success(res.data.message);
  //       setname("");
  //       setemail("");
  //       setmsg("");
  //     } else {
  //       toast.error(res.data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setname("");
  //     setemail("");
  //     setmsg("");
  //   }
  // };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 ">
              <div className="card1">
                <div className="row border-line">
                  {/* <LightSpeed> */}
                  <img
                    src="image/contactus.jpg"
                    alt="contact"
                    className="image"
                  />
                  {/* </LightSpeed> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 ">
              {/* <Rotate> */}
              <div className="card2 d-flex  border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6 style={{ textAlign: "center" }}>
                      {/* Contact with icons */}
                      <BsLinkedin color="#1e1e1e" size={30} className="ms-2" />
                      <BsGithub color="#1e1e1e" size={30} className="ms-2" />
                      <BsFacebook color="#1e1e1e" size={30} className="ms-2" />
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write Your messagess"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setmsg(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    {/* //onClick={handleSubmit} */}
                    <button className="button">SEND MESSAGE</button>
                  </div>
                </div>
              </div>
              {/* </Rotate> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
