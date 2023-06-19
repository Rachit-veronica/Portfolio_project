import React from "react";
import contactImage from "../image/contact-image.png";
import sendImage from "../image/send-image.png";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import "../../componends/css/contact.style.css";

function Contact() {
  const [emailValue, setEmailValue] = useState("");
  const [textValue, setTextValue] = useState("");
  let i = 0;
  const [state, handleSubmit] = useForm("xkneoyge");
  if (state.succeeded) {
    alert("Thanks For Showing Interest");
    window.location.reload();
  }

  return (
    <div className="firstPage">
      <div className="contact-text">
        <h1>Contact me</h1>
      </div>
      <div className="contactBody">
        <div className="contact-img">
          <img src={contactImage} />
        </div>
        <div className="form-screen">
          <form onSubmit={handleSubmit}>
            <div className="email">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                value={emailValue}
                onChange={(event) => setEmailValue(event.target.value)}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="message">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={textValue}
                onChange={(event) => setTextValue(event.target.value)}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="submitBtn">
              <button type="submit" disabled={state.submitting}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
