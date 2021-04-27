import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer site-footer--with-clipmask">
      <div className="site-footer__quote">"Everyday living is learning."</div>
      <div className="site-social">
        <div className="site-social__list">
          <a
            href="https://www.linkedin.com/in/richard-zh/"
            className="site-social__link"
          >
            <svg
              className="site-social__icon"
              viewBox="0 0 512 512"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333zM279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z" />
            </svg>
          </a>
        </div>
        <div className="site-social__list">
          <a href="https://github.com/richard929" className="site-social__link">
            <svg
              viewBox="0 0 512 512"
              preserveAspectRatio="xMidYMid meet"
              className="site-social__icon"
            >
              <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"></path>
            </svg>
          </a>
        </div>
        <div className="site-social__list">
          <a
            href="https://stackoverflow.com/users/12233187/richard-zhan"
            className="site-social__link"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 118"
              className="site-social__icon"
            >
              <polygon
                points="84.072,107.351 84.072,75.8 94.588,75.8 94.588,117.869 0,117.869 0,75.8 10.516,75.8 
    10.516,107.351 "
              />
              <path
                d="M22.089,72.898l51.458,10.815l2.163-10.292L24.252,62.606L22.089,72.898z M28.897,48.259l47.666,22.199
    l4.44-9.533L33.337,38.726L28.897,48.259z M42.088,24.874l40.405,33.65l6.73-8.081l-40.405-33.65L42.088,24.874z M68.171,0
    l-8.438,6.276l31.381,42.191l8.438-6.276L68.171,0z M21.044,96.833l52.582,0V86.316l-52.582,0V96.833z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="site-footer__copyright">
        &nbsp; Copyright &copy; {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
