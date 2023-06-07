import React from "react";
import { Link } from "react-scroll";
import Particles from "react-tsparticles";

import profileImage from "../assets/img/profile.png";

const Hero = (props) => {
  const data = props.portfolioData;

  return (
    <section className="site-intro site-intro--with-clipmask">
      <Particles className="site-intro__canvas" />
      <div className="container">
        <div className="site-intro__wrapper">
          <div className="site-intro__main">
            <div className="site-intro__intro">
              <h2 className="site-intro__name"> I'm {data.name}. </h2>
              <h2 className="site-intro__heading"> {data.role} </h2>
              <h1 className="site-intro__primary"> {data.intro} </h1>
              <div className="site-intro__action">
                <Link
                  className="btn btn-outline-white btn-radius btn-lg"
                  to="project"
                  href="#project"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  See my works
                </Link>
              </div>
            </div>
          </div>
          <div className="site-intro__logo-wrapper">
            <img src={profileImage} alt="" className="site-intro__logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
