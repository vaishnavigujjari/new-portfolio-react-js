import React from "react";
import LinkedIn from "../../assets/contact/linkedin.png";
import Email from "../../assets/contact/email.png";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="flex flex-col items-center justify-center mt-24 mx-0 my-6 box-border min-h-0 h-auto"
      >
        <p className="mt-8 text-center">Get in Touch</p>
        <h1 className="text-center text-3xl mb-6">Contact Me</h1>
        <div className="flex flex-col justify-center items-center rounded-3xl border border-gray-400 border-solid p-4 my-auto sm:flex-row sm:flex-wrap">
          <div className="flex items-center justify-center gap-2 m-4">
            <img src={Email} alt="Email icon" className="pointer h-7" />
            <p className="text-lg">
              <a href="mailto:vaishnavidevigujjari@gmail.com">
                vaishnavidevigujjari@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 m-4">
            <img src={LinkedIn} alt="LinkedIn icon" className="pointer h-7" />
            <p className="text-lg">
              <a href="https://www.linkedin.com/in/vaishnavigujjari">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
