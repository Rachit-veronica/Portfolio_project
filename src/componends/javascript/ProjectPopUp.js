import React, { useEffect, useRef, useState } from "react";

import data from "../data.json";
import "../css/ProjectPopUpStyle.css";

const ProjectPopUp = ({ indexData }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  // const renderedPointList = data[indexData].aboutPoint.map((item, index) => (
  //   <li key={index}>{item}</li>
  // ));
  // const renderedSkillList = data[indexData].skill.map((item, index) => (
  //   <li key={index}>{item}</li>
  // ));
  return (
    <>
      <div className="popupOutterBody">
        <h1>Project Detail</h1>
        <div className="popupInnerBody">
          <div className="projectVideo">
            <video ref={videoRef} autoPlay muted>
              <source src={data[indexData].img} type="video/mp4" />
            </video>
          </div>
          <div className="midLine">
            <div className="vertical-line"></div>
          </div>
          <div className="projectDetail">
            <div className="projectTitle">
              <h1>{data[indexData].title}</h1>
            </div>
            <div className="projectURL">
              <a href={data[indexData].webLink}>
                <button>Visit Site</button>
              </a>
              <a href={data[indexData].githubLink}>
                <button>View Code</button>
              </a>
            </div>
            <div className="projectAbout">
              <h2>About :-</h2>
              <p>
                <strong>{data[indexData].about}</strong>
              </p>
              <ul>
                {data[indexData].aboutPoint.map(
                  (
                    item,
                    index // this use for bold the text
                  ) => (
                    <li dangerouslySetInnerHTML={{ __html: item }}></li> // dangerouslySetInnerHTML={{ __html: item }} this is help to convert the string into html
                  )
                )}
              </ul>
            </div>
            <div className="projectSkill">
              <h2>Skill :-</h2>
              <ul>
                {data[indexData].skill.map((item, index) => (
                  <li>
                    <strong dangerouslySetInnerHTML={{ __html: item }}></strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPopUp;
