import React from "react";
import ExperienceIcon from "../../assets/about/experience.png";
import EducationIcon from "../../assets/about/education.png";

const About = () => {
  return (
    <>
      <section id="about" className="pt-[4vh] mx-[10rem] box-border min-h-auto">
        <p className="text-center w-full">Get To Know More</p>
        <h1 className="text-center text-3xl mb-6">About Me</h1>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap gap-8 m-8 justify-center">
            <div className="w-[350px] h-[125px] rounded-2xl border border-gray-400 border-solid p-4 text-center bg-white">
              <img
                src={ExperienceIcon}
                alt="Experience icon"
                className="cursor-pointer h-[2rem]"
              />
              <p>
                2+ years <br />
                Full Stack Software Engineer
              </p>
            </div>
            <div className="w-[350px] h-[125px] rounded-2xl border border-gray-400 border-solid p-4 text-center bg-white">
              <img
                src={EducationIcon}
                alt="Education icon"
                className="cursor-pointer h-[2rem]"
              />
              <p>
                Bachelors in Information Technology
                <br />
                Masters in Computer Science
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
