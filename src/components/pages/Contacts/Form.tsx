import React, { FormEvent, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Form = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function clearFormData() {
    setUserName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }
  const ServiceID: string = process.env.ServiceID ?? "";
  const TemplateID: string = process.env.TemplateID ?? "";
  const PublicKey: string = process.env.PublicKey ?? "";

  function sendEmail(e: FormEvent) {
    e.preventDefault();
    const mail = {
      email: email,
      to_name: "Pabin Dhami",
      from_name: userName,
      subject: subject,
      message: message,
    };

    emailjs.init(PublicKey);
    emailjs
      .send(ServiceID, TemplateID, mail)
      .then(() =>
        Swal.fire({
          title: "Success!",
          text: "Mail sent successfully",
          icon: "success",
          confirmButtonText: "OK",
        })
      )
      .catch((error) => {
        Swal.fire({
          title: "Failed!",
          text: "Please try again later",
          icon: "error",
          confirmButtonText: "OK",
        });
        console.log(error);
      });

    clearFormData();
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
