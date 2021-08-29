import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "./img/person.png";

const Home = () => {
  return (
    <>
      <section className="home-section section">
      <div className="effect-wrap">
       <div className="effect effect-1">
       </div>
       <div className="effect effect-2">
       <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>

      <div className="effect effect-3">
       <div className="outer-shadow"></div>
      </div>

      <div className="effect effect-4">
      </div>

      <div className="effect effect-5">
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
      </div>

        <div className="container">
          <div className="home align-item-center">
            <div className="intro">
              <p>Welcome to </p>
              <h2>WEBDEV Studio</h2>
              <h1>Web Designing & Developent</h1>
              <a className="btn1" href="#">GET STARTED</a>
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
