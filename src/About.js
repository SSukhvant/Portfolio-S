import React from "react";
import $ from "jquery";
import Profile from "./img/person.png";
import Skills from "./components/Skills";

const About = () => {
  return (
    <>
      <section className="about-section">
      <div className="container">
          <h1 className="text-center">About</h1>
      <div className="about mt-5 py-2 py-md-4">
        <div className="about-pic mb-4 me-4">
        <div className="pic-box inner-shadow">
        <img src={Profile} alt="ssukhvant" className="outer-shadow"/>
        </div>
        </div>
        <div className="about-info py-4">
        <p className="my-4">I am a passionated and motivated person who is enthusiastic about their career goals with a proven track record. I always strive to achieve the highest standard possible, at any given task and in any situation. I am accustomed to working in a challenging and fast-paced environment, particularly when dealing with multiple projects and priorities at the same time.</p>
              <a to="/" className="btn1">Download CV</a>
              <a to="/" className="btn1 ms-4">Hire Me</a>
              
        </div>
      </div>

      <Skills/>
      </div>
      </section>

    </>
  );
};

export default About;
