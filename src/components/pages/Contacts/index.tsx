import React from "react";
import myDetails from "./Api";
import Form from "./Form";

const Contact = ({ active }: { active: number }) => {
  return (
    <section
      className={`container contact ${active === 4 ? "active" : ""}`}
      id="contact"
    >
      <div className="contact-container">
        <div className="main-title">
          <h2>
            Contact <span>Me</span>
            <span className="bg-text">Contact</span>
          </h2>
        </div>
        <div className="contact-content-con">
          <div className="left-contact">
            <h4>Contact me here</h4>
            <p>If you have any query then contact me?</p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Location</span>
                </div>
                <p>{myDetails.location.join(", ")}</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                  <span>Email</span>
                </div>
                <p>
                  <span>pabindhami@gmail.com</span>
                </p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-user-graduate"></i>
                  <span>Education</span>
                </div>
                <p>
                  <span>{myDetails.education}</span>
                </p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-user-graduate"></i>
                  <span>Mobile Number</span>
                </div>
                <p>
                  <span>{myDetails.mobile}</span>
                </p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-globe-africa"></i>
                  <span>Languages</span>
                </div>
                <p>
                  <span> {myDetails.language.join(", ")}</span>
                </p>
              </div>
            </div>
            <div className="contact-icons">
              <div className="contact-icon">
                <a
                  href="https://www.facebook.com/pabindhami12/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/CoderMode365" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/CodeMode365" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/pabin-dhami-ab29b024a/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
