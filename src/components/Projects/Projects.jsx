import React from "react";
import Resurge from "../../assets/projects/resurge.png";
import Foodies from "../../assets/projects/foodies.jpeg";
import Instasure from "../../assets/projects/instasure.png";
import Yorking from "../../assets/projects/yorking.png";
import HPP from "../../assets/projects/housepricepred.jpeg";
import Emotion from "../../assets/projects/emotiondetection.png";

const Projects = () => {
  const items = [
    {
      name: "Resurge",
      imgSrc: Resurge,
      tech: "React JS",
      desc: "Revolutionized job application tracking with a user-friendly platform, featuring comprehensive company listings.",
    },
    {
      name: "NextLevel Foodies",
      imgSrc: Foodies,
      tech: "Next JS, React JS",
      desc: "Crafted a dynamic, user-friendly foodies application for efficient recipe management.",
    },
    {
      name: "Instasure",
      imgSrc: Instasure,
      tech: "React JS, Sureify-Crux, JavaScript",
      desc: "Simplified employee onboarding with a centralized interface and seamless collaboration.",
    },
    {
      name: "Yorking",
      imgSrc: Yorking,
      tech: "Django, Python, HTML, CSS",
      desc: "Created a dynamic fantasy sports hub for live updates and dream team building.",
    },
    {
      name: "House Price Prediction",
      imgSrc: HPP,
      tech: "Python",
      desc: "Built precise property valuation model in Python, optimizing with one-hot encoding, tuning, delivering insights.",
    },
    {
      name: "Emotion Detector",
      imgSrc: Emotion,
      tech: "Python, NLTK, Pandas, Matplotlib",
      desc: "Used ML and NLP to extract emotions from text and hashtag tweets, visualized with bar plots.",
    },
  ];

  const getProjectAtIndex = (index) => {
    const project1 = items[index];
    const project2 = items[index + 1];

    return (
      <div
        key={index}
        className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8"
      >
        <div
          className="flex lg:flex-row  flex-col justify-center items-center rounded-3xl border 
    border-gray-400 border-solid p-4 w-full h-auto"
        >
          <img
            src={project1.imgSrc}
            alt={project1.name}
            className="h-52 w-80 md:h-48"
          />
          <div className="flex flex-col text-center md:text-left mt-4 md:mt-0 md:ml-4 md:max-w-[300px]">
            <h2 className="text-xl text-center font-bold">{project1.name}</h2>
            <p className="text-lg text-center mt-2">{project1.tech}</p>
            <p className="mt-2 text-center">{project1.desc}</p>
          </div>
        </div>
        <div
          className="flex lg:flex-row flex-col-reverse justify-center items-center rounded-3xl border 
    border-gray-400 border-solid p-4 w-full h-auto"
        >
          <div className="flex flex-col text-center md:text-left mt-4 md:mt-0 md:mr-4 md:max-w-[300px]">
            <h2 className="text-xl text-center font-bold">{project2.name}</h2>
            <p className="mt-2 text-center">{project2.tech}</p>
            <p className="mt-2 text-center">{project2.desc}</p>
          </div>
          <img
            src={project2.imgSrc}
            alt={project2.name}
            className="h-52 w-80 md:h-48"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="projects" className="mt-20">
        <p className="text-center">Browse my recent</p>
        <h1 className="text-3xl text-center">Projects</h1>
        <div className="w-full px-4 xl:w-3/4 mx-auto mt-8 max-w-screen-xl">
          {items.map((item, index) =>
            index % 2 === 0 ? getProjectAtIndex(index) : null
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
