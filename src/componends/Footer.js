import React from "react";
import bgImage from "./image/footer-bg.png";
import linkedinImage from "./image/linkedin.png";
import whatsappImage from "./image/whatsapp.png";
import twitterImage from "./image/twitter.png";
import gmailImage from "./image/gmail.png";
import githubImage from "./image/github.png";

function Footer() {
  // function whatsapp() {
  //   alert("whatsapp Number is 7007809880");
  // }

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
                <a href="#">
                  <img src={whatsappImage} />
                </a>
              </li>
              <li>
                <a href="https://github.com/Rachit-veronica">
                  <img src={githubImage} />
                </a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/u/0/#inbox/FMfcgzGqQSNqsgMZVKZnCcZMjFVhTBSM?compose=jrjtXRFnJlCWRkVjtkLMgbBMPNZQWFBVfTbRDDFrvdNPPhtbBxXMcDbhVdTKntbrDhLnNflc">
                  <img src={gmailImage} />
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
