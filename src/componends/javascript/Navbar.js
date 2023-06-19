import React from "react";
import icon from "../image/projectIcon.png";
import "../../componends/css/Navbar.style.css";

function Navbar() {
  const skillsFunction = () => {
    if (window.screen.width > 860) {
      window.scrollTo({ top: 680, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 1100, left: 0, behavior: "smooth" });
    }
  };
  const experienceFunction = () => {
    if (window.screen.width > 860) {
      window.scrollTo({ top: 1400, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 2180, left: 0, behavior: "smooth" });
    }
  };
  const projectFunction = () => {
    if (window.screen.width > 860) {
      window.scrollTo({ top: 2050, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 2920, left: 0, behavior: "smooth" });
    }
  };
  const contactFunction = () => {
    if (window.screen.width > 860) {
      window.scrollTo({ top: 2750, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 4670, left: 0, behavior: "smooth" });
    }
  };
  return (
    <div className="navbarBody">
      <div className="navbar">
        <ul>
          <li>
            <a onClick={skillsFunction}>Skills</a>
          </li>
          <li>
            <a onClick={experienceFunction}>Experience</a>
          </li>
          <li>
            <div className="projectBtn">
              <a onClick={projectFunction}>
                Projects <img src={icon} />
              </a>
            </div>
          </li>
          <li>
            <a onClick={contactFunction}>Contact me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
