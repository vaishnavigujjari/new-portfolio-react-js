import React from "react";
import Innopark from "../../assets/experience/innopark.jpeg";
import Sureify from "../../assets/experience/sureify.jpeg";
import Flow from "../../assets/experience/flow.jpeg";
import "../../styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Experience = () => {
  const items = [
    {
      name: "Flow",
      role: "Full Stack Software Engineer",
      imageLoc: Flow,
      companyLink: "https://flowai.tech/",
      description: "",
      bgColor: "customGray",
    },
    {
      name: "Sureify",
      role: "Software Engineer",
      imageLoc: Sureify,
      companyLink: "https://www.sureify.com/",
      description: "",
      bgColor: "customGreen",
    },
    {
      name: "Innopark Ventures",
      role: "Software Development Engineer Intern",
      imageLoc: Innopark,
      companyLink: "https://www.innopark.in/",
      description: "",
      bgColor: "customOrange",
    },
  ];

  const colorClasses = {
    customGreen: "bg-customGreen",
    customOrange: "bg-customOrange",
    customGray: "bg-customGray",
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section id="experience">
        <div className="w-full px-4 md:w-3/4 lg:w-2/3 xl:w-3/4 mx-auto mt-20 max-w-screen-xl">
          <p className="text-center">Explore my</p>
          <h1 className="text-3xl text-center">Experience</h1>
          <div className="">
            <Slider {...settings}>
              {items.map((item) => (
                <div
                  className="bg-white w-[400px] m-[20px] pb-10 text-black"
                  key={item.name}
                >
                  <div
                    className={`w-full h-48 text-black rounded-xl flex justify-center align-center items-center md:flex-col ${
                      colorClasses[item.bgColor]
                    }`}
                  ></div>
                  <div className="flex mt-4">
                    <img
                      src={item.imageLoc}
                      alt={item.name}
                      className="flex-col h-[150px] w-[150px] mt-[-75px] bg-white rounded-full"
                    />
                    <div className="ml-4 flex flex-col flex-wrap justify-start">
                      <h2 className="text-2xl">{item.role}</h2>
                      <h2 className="text-2xl">{item.name}</h2>
                      <a href={item.companyLink}>
                        <p className="text-gray-700">{item.companyLink}</p>
                      </a>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
