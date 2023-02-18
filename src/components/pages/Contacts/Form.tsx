import React, { FormEvent, useState, useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import ReCAPTCHA from "react-google-recaptcha";

const Form = ({ darkTheme }: { darkTheme: boolean }) => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const recaptcha = useRef<ReCAPTCHA>(null);

  const ServiceID: string = process.env.ServiceID ?? "";
  const TemplateID: string = process.env.TemplateID ?? "";
  const PublicKey: string = process.env.PublicKey ?? "";
  const RecaptchaKey: string = process.env.RecaptchaToken1 ?? "";

  //verify recaptcha
  function handleVerify(response: string | null) {
    if (response) {
      setIsVerified(true);
    }
  }

  function clearFormData() {
    setUserName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  function sendEmail(e: FormEvent) {
    e.preventDefault();
    if (isVerified) {
      const mail = {
        email: email,
        to_name: "Pabin Dhami",
        from_name: userName,
        subject: subject,
        message: message,
      };

      emailjs.init(PublicKey);
      try {
        emailjs.send(ServiceID, TemplateID, mail);
        Swal.fire({
          title: "Success!",
          text: "Mail sent successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      } catch (err) {
        Swal.fire({
          title: "Failed!",
          text: "Please try again later",
          icon: "error",
          confirmButtonText: "OK",
        });
        console.error(err);
      }

      clearFormData();
      recaptcha.current?.reset();
    } else {
      alert("Please complete test first");
    }
  }

  return (
    <div className="right-contact">
      <form action="" className="contact-form" onSubmit={(e) => sendEmail(e)}>
        <div className="input-control i-c-2">
          <input
            type="text"
            required
            placeholder="YOUR NAME"
            id="username"
            name="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder="YOUR EMAIL"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-control">
          <input
            type="text"
            required
            placeholder="ENTER SUBJECT"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="input-control">
          <textarea
            name="message"
            cols={15}
            rows={8}
            placeholder="Message Here..."
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <ReCAPTCHA
          sitekey={RecaptchaKey}
          onChange={(response) => {
            handleVerify(response);
          }}
          ref={recaptcha}
          id="recaptcha"
          theme={darkTheme ? "dark" : "light"}
          badge="inline"
          size="normal"
          type="image"
        />
        <div className="submit-btn">
          <button id="submit-btn" className="submit-btn main-btn" type="submit">
            <span className="btn-text">Send</span>
            <span className="btn-icon">
              <i className="fas fa-mail-bulk"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
