import "./App.css";
import React, { useState } from "react";
import Navbar from "./componends/javascript/Navbar";
import Objective from "./componends/javascript/objective";
import Skills from "./componends/javascript/Skills";
import Project from "./componends/javascript/Project";
import Contact from "./componends/javascript/Contact";
import Footer from "./componends/javascript/Footer";
import Experience from "./componends/javascript/Experience";
import Popup from "./componends/javascript/Popup";
import ProjectPopUp from "./componends/javascript/ProjectPopUp";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [indexVlu, setIndexVlu] = useState("");

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const openPopup = () => {
    togglePopup();
  };

  const indexfunc = (data) => {
    console.log("indexValue", data);
    setIndexVlu(data);
  };

  return (
    <div className="App">
      <Navbar />
      <Objective />
      <Skills />
      <Experience />
      <Project btnWorking={openPopup} indexVlu={indexfunc} />
      <Contact />
      <Footer />
      {showPopup && (
        <Popup
          content=<ProjectPopUp indexData={indexVlu} />
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default App;
