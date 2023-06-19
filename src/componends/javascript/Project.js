import React, { useEffect, useRef, useState } from "react";
import skillsImage from "../image/skills-image.png";
import linkImage from "../image/project/viewMore.png";
import "../../componends/css/project.style.css";
import Popup from "../javascript/Popup";
import data from "../data.json";

// import jsonData from "./data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import icon from "../image/projectH1Icon.png";
import video from "../video/video.mp4";

function Project({ btnWorking }) {
  const videoRef = useRef(null);

  const arrayNumberValue = data.length;
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

  useEffect(() => {
    videoRef.current.play();
  }, []);

  const LinkBtn = (e, index) => {
    e.preventDefault();
    btnWorking(true);
    console.log(index);
  };
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
        {Object.keys(data).map((id, index) => {
          return (
            <>
              <div className="project-card">
                <h1>{data[index].title}</h1>
                <div className="img">
                  {/* <img src={item.img} /> */}
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    style={{ width: "100%" }}
                  >
                    <source src={data[index].img} type="video/mp4" />
                  </video>
                </div>
                <div className="project-card-text">
                  <p>{data[index].about}</p>
                </div>
                <div className="link">
                  <img src={linkImage} onClick={(e) => LinkBtn(e, index)} />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
