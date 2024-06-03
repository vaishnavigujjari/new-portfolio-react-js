import React from "react";
import Postman from "../../assets/certifications/postman.png";
import Microsoft from "../../assets/certifications/azuredata.svg";
import Hackerrank from "../../assets/certifications/hackerrank.jpeg";
import LinkedIn from "../../assets/certifications/linkedin.png";
import Jira from "../../assets/certifications/jira.png";

const Certifications = () => {
  const items = [
    { name: "Postman API Fundamentals", imgSrc: Postman },
    { name: "Azure Data Fundamentals", imgSrc: Microsoft },
    { name: "Hackerrank SQL(Basic)", imgSrc: Hackerrank },
    { name: "Agile Software Development", imgSrc: LinkedIn },
    { name: "Jira Fundamentals", imgSrc: Jira },
  ];
  return (
    <>
      <section id="certifications">
        <div className="w-full px-4 md:w-3/4 lg:w-2/3 xl:w-3/4 mx-auto mt-24 max-w-screen-xl">
          <p className="text-center">Unveil my</p>
          <h1 className="text-3xl text-center">Certifications</h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 mt-8">
            {items.map((item, index) => (
              <div
                className="flex flex-col justify-center items-center rounded-3xl border 
      border-gray-400 border-solid p-4 w-full h-[250px]"
              >
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="h-[150px] w-[150px] rounded-full"
                />
                <div className="flex flex-col text-center md:text-left mt-4 md:mt-0 md:ml-4 md:max-w-[300px]">
                  <p className="text-lg text-center">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
