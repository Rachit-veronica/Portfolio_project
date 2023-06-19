import React, { useEffect, useRef, useState } from "react";
import video from "../video/video.mp4";

import "../css/ProjectPopUpStyle.css";

const ProjectPopUp = () => {
  const videoRef = useRef(null);

  const data = [
    {
      img: video,
      title: "Portfolio",
      link: "http://rachitprotfolio.s3-website.ap-south-1.amazonaws.com/",
      about:
        "I worked on portfolio website that give you my all info and experience. In which I have implemented REACT JS, HTML, CSS and javascript and Deploying on AWS S3 Bucket",
    },
  ];
  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <>
      <div className="popupOutterBody">
      <h1>Project Detail</h1>
        <div className="popupInnerBody">
          <div className="projectVideo">
            {data.map((item) => {
              return (
                <>
                  <video ref={videoRef} autoPlay muted>
                    <source src={item.img} type="video/mp4" />
                  </video>
                </>
              );
            })}
          </div>
          <div className="midLine">
            <div class="vertical-line"></div>
          </div>
          <div className="projectDetail">
            <div className="projectTitle">
              <h1>{data[0].title}</h1>
            </div>
            <div className="projectURL">
              <button>Visit Site</button>
              <button>View Code</button>
            </div>
            <div className="projectAbout">
              <h2>About :-</h2>
              <p>{data[0].about}</p>
              <ul>
                <li>
                  Created a dedicated section to showcase previous projects in
                  software development, web design, and data analysis, with
                  detailed descriptions, screenshots, and related resources.
                </li>
              </ul>
            </div>
            <div className="projectSkill">
              <h2>Skill :-</h2>
              <ul>
                <li>
                  <p>HTML</p>
                </li>
                <li>
                  <p>css</p>
                </li>
                <li>
                  <p>javascript</p>
                </li>
                <li>
                  <p>React js</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPopUp;
