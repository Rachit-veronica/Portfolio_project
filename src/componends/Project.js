import React, { useEffect } from "react";
import skillsImage from "./image/skills-image.png";
import linkImage from "./image/visitHere.png";
import jsonData from "./data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import icon from "./image/projectH1Icon.png";

function Project() {
  const arrayNumberValue = jsonData.length;
  console.log(Math.trunc(arrayNumberValue));
  const arrayPerValue = 100 / arrayNumberValue;
  console.log(arrayPerValue);
  function setGridNumberValue(value1) {
    document.documentElement.style.setProperty("--grid-valueNumber", value1);
  }
  setGridNumberValue(arrayNumberValue);

  function setGridPerValue(value2) {
    document.documentElement.style.setProperty("--grid-valuePer", value2);
  }
  setGridPerValue(`${arrayPerValue}%`);
  return (
    <div className="firstPage">
      <div className="project-title">
        <h1>
          Project <img src={icon} />
        </h1>
      </div>
      <div className="project-text">
        <p>Some of my projects include :</p>
      </div>
      <div className="projectCardScreen">
        {/* <div className="leftBtnSide">
          <button>
            <FontAwesomeIcon id="anglesLeft" icon={faAnglesLeft} />
          </button>
        </div> */}

        {jsonData.map((item) => {
          return (
            <div className="project-card">
            <h1>{item.title}</h1>
              <div className="img">
                <img src={item.img} />
              </div>
              <div className="project-card-text">
                <p>{item.about}
                </p>
              </div>
              <div className="link">
                <a href={item.link}>
                  <img src={linkImage} />
                </a>
              </div>
            </div>
          );
        })}
        {/* <div className="rightBtnSide">
          <button>
            <FontAwesomeIcon id="anglesRight" icon={faAnglesRight} />
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Project;
