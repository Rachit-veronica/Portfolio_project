import React, { useState } from "react";
import bgImage from "../image/footer-bg.png";
import linkedinImage from "../image/linkedin.png";
import whatsappImage from "../image/whatsapp.png";
import twitterImage from "../image/twitter.png";
import gmailImage from "../image/gmail.png";
import githubImage from "../image/github.png";
import "../../componends/css/footer.style.css";

function Footer() {
  const [inputStyle, setInputStyle] = useState("none");

  // function whatsapp() {
  //   alert("whatsapp Number is 7007809880");
  // }
  const email = "rachitgupta7007@gmail.com";
  const subject = "Hello!";
  const body = "This is the body of the email.";

  const handleMailToClick = () => {
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const inputData = () => {
    if (inputStyle == "none") {
      setInputStyle("block");
    } else {
      setInputStyle("none");
    }
  };

  return (
    <div className="footerBody">
      <div className="footer-bg">
        <img src={bgImage} />
      </div>
      <div className="footerMediaBody">
        <div className="media-screen">
          <div className="media-title">
            <p>My social media links:</p>
          </div>
          <div className="media-link">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/rachit-gupta-5909631b2/">
                  <img src={linkedinImage} />
                </a>
              </li>
              <li>
                <a>
                  <img src={whatsappImage} onClick={inputData} />
                </a>
              </li>
              <li>
                <a href="https://github.com/Rachit-veronica">
                  <img src={githubImage} />
                </a>
              </li>
              <li>
                <a>
                  <img src={gmailImage} onClick={handleMailToClick} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="github-screen">
          <div className="github-title">
            <p>More projects I’ve worked on</p>
          </div>
          <div className="github-link">
            <ul>
              <li>
                <a>
                  <img src={githubImage} />
                </a>
              </li>
              <li>
                <p>
                  <a href="#">@john-doe</a> on github
                </p>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
