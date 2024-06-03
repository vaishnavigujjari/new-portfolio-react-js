import React from "react";
import MainPic from "../../assets/main/main.jpg";
import GitHub from "../../assets/profile/github.png";
import LinkedIn from "../../assets/profile/linkedin.png";

const Main = () => {
  const GithubClick = (event) => {
    event.preventDefault();
    window.location.href = "https://github.com/vaishnavigujjari";
  };

  const linkedInClick = (event) => {
    event.preventDefault();
    window.location.href = "https://www.linkedin.com/in/vaishnavigujjari/";
  };

  return (
    <>
      <section
        id="profile"
        className="pt-4 my-10 box-border max-h-screen font-poppins justify-center gap-7 md:flex"
      >
        <div className="flex justify-center md:order-1">
          <img src={MainPic} alt="profile pic" className="h-80 w-80" />
        </div>
        <div className="flex flex-col text-center items-center align-middle h-[12] md:items-center md:order-2 md:align-middle gap-2">
          <p className="text-lg mt-10">Hello, I am</p>
          <h1 className="text-4xl">Vaishnavi Devi Gujjari</h1>
          <p className="text-lg">Full Stack Software Engineer</p>
          <div className="flex justify-center items-center text-center p-2 gap-8">
            <a href="./resume.pdf" target="_blank" className="text-center">
              <span>Download CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>
            <a href="#contact">
              <span>Contact</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </a>
          </div>
          <div className="flex items-center justify-center gap-6">
            <img
              src={LinkedIn}
              alt="My LinkedIn profile"
              onClick={linkedInClick}
              height={25}
              width={25}
            />
            <img
              src={GitHub}
              alt="My Github profile"
              onClick={GithubClick}
              height={25}
              width={25}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
