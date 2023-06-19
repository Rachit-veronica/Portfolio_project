import React from "react";
import intershipImage from "../image/intershipPhoto.png";
import "../../componends/css/experience.style.css";

function Experience() {
  return (
    <div className="firstPage">
      <div className="experiencetitle">
        <h1>Experience</h1>
      </div>
      <div className="experienceBody">
        <div className="experienceImg">
          <img src={intershipImage} />
        </div>
        <div className="experienceText">
          <div className="experienceInfoTitle">
            <h1>Frontend Developer Intern</h1>
            <p>Business Cradle Technologies Pvt. Ltd.</p>
            <p>Apr-2022 to Jul-2022</p>
          </div>
          <div className="experienceInfo">
            <p>
              <ul>
                <li>
                  Developed using CSS, HTML, and JavaScript to enhance
                  functionality and user experience on web pages.
                </li>
                <li>
                  Participated in daily Tech team meetings to discuss current
                  and future projects and strategies on how to produce efficient
                  work.
                </li>
                <li>
                  Led a small team to develop a Virtual Reality project as a
                  potential idea for new company services.
                </li>
                <li>
                  Edited existing codes to improve browser compatibility and
                  mobile responsiveness.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
