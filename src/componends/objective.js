import React, { useState } from "react";
import photo from "./image/photo.jpg";

function Objective() {
  const hireFunction = () => {
    if (window.screen.width > 860) {
      window.scrollTo({ top: 2900, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 4670, left: 0, behavior: "smooth" });
    }
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
