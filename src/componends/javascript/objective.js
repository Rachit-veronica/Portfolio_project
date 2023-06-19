import React, { useState } from "react";
import photo from "../image/photo.jpg";
import resume from "../image/Resume.pdf";
import "../../componends/css/objective.css";


function Objective() {
  const hireFunction = () => {
    if (window.screen.width > 860) {
      window.scrollTo({ top: 2750, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 4670, left: 0, behavior: "smooth" });
    }
  };

  const onCvButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(resume).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <div className="firstPage">
        <div className="objectiveBody">
          <div className="textContainer">
            <div className="name">
              <h1>Rachit Gupta</h1>
            </div>
            {/* <div className="profileName">
            <h2>Frontend Developer</h2>
          </div> */}
            <div className="objective">
              <p>
                I am Highly passionate about application design & programming
                and aspire to contribute to digital transformation. I have Great
                Working Experience on React js Project as a
                <strong> Frontend Developer</strong> providing scalable and
                reusable solutions while maintaining Good efficiency.
              </p>
            </div>
            <div className="ObjectiveSubmitBtn">
              <button id="download" onClick={onCvButtonClick}>
                Download CV
              </button>
              <button onClick={hireFunction} id="objectiveBtn" type="submit">
                Hire me
              </button>
            </div>
          </div>
          <div className="photo">
            <img src={photo} />
          </div>
        </div>
      </div>
      {/* <div className="topScroll">
        <div className="topScrollBody">
          <button> hello</button>
        </div>
      </div> */}
    </>
  );
}

export default Objective;
