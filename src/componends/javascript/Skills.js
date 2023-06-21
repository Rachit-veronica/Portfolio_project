import React from "react";
import html from "../image/html5.png";
import css from "../image/css3.png";
import js from "../image/js.png";
import bootstrap from "../image/bootstrap.png";
import skillsImage from "../image/skills-image.png";
import react from "../image/react.png";
import sass from "../image/sass.png";
import styleImg from "../image/styleComponents.png";
import "../../componends/css/skills.style.css";

function Skills() {
  return (
    <div className="firstPage">
      <div className="skillsBody">
        <div className="skills-title">
          <h1>Skills</h1>
        </div>
        <div className="skillsTextBody">
          <div className="skills-text">
            <p>I have a vast experience in the following web technologies:</p>
            <div className="skills">
              <ul>
                <li>
                  <img src={react} />
                </li>
                <li>
                  <img src={html} />
                </li>
                <li>
                  <img src={css} />
                </li>
                <li>
                  <img src={js} />
                </li>
                <li>
                  <img src={sass} />
                </li>
                <li>
                  <img src={styleImg} />
                </li>
                <li>
                  <img src={bootstrap} />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="skills-image">
          <img src={skillsImage} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
