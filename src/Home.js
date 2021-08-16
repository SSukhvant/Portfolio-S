import React from "react";
import Profile from "./img/Pro.png";

const Home = () => {
  return (
    <>
      <section className="home-section section">
        <div className="container">
          <div className="home align-item-center">
            <div className="intro">
              <p>Hello</p>
              <h2>I'm Sukhvant Singh</h2>
              <h1>Web Designer & Developer</h1>
            </div>

            <div className="profile">
              <div className="img-box inner-shadow">
                  <img src={Profile} alt="ssukhvant" className="outer-shadow"/>
              </div>
            </div>
          </div>
          </div>
      </section>
    </>
  );
};

export default Home;
