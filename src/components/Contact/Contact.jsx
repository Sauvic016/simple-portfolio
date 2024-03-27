import React from "react";
import "./contact.css";
import gmail from "../../assets/Gmail.png";
import linkedin from "../../assets/LinkedIn.png";
import github from "../../assets/github.png";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <div className="contact_button">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sauvicpaulchy@gmail.com"
          target="_blank"
          className="button button--flex"
        >
          <img src={gmail} alt="gmail-icon" style={{ height: "20px", width: "24px", marginRight: "12px" }} /> Email
        </a>
        <a href="https://www.linkedin.com/in/sauvicpaulchy/" target="_blank" className="button button--flex">
          <img src={linkedin} alt="gmail-icon" style={{ height: "24px", width: "24px", marginRight: "12px" }} />{" "}
          LinkedIn
        </a>
        <a href="https://github.com/Sauvic016/" target="_blank" className="button button--flex">
          {" "}
          <img src={github} alt="gmail-icon" style={{ height: "30px", width: "30px", marginRight: "12px" }} /> Github
        </a>
      </div>
    </section>
  );
};

export default Contact;
