import React from "react";
import Amazon from "../../assets/otherExp/amazon.jpeg";
import Microsoft from "../../assets/otherExp/microsoft.jpeg";
import StreetCause from "../../assets/otherExp/streetcause.jpeg";
import HouseItt from "../../assets/otherExp/houseitt.jpeg";
import InternBit from "../../assets/otherExp/internbit.png";
import COSC from "../../assets/otherExp/cosc.jpeg";

const Leadership = () => {
  const items = [
    {
      name: "Amazon",
      imgSrc: Amazon,
      title: "ACMS Mentee",
      desc: "Engineered and implemented a streamlined user interface for team creation and player selection, leading to a notable 40% decrease in user errors",
    },
    {
      name: "Microsoft",
      imgSrc: Microsoft,
      title: "Student Partner",
      desc: "Facilitated GitHub and JavaScript practice sessions at CBIT campus, resulting in a substantial improvement in attendees’ technical proficiency. ",
    },
    {
      name: "Street Cause",
      imgSrc: StreetCause,
      title: "Community Volunteer",
      desc: "Played a pivotal role in COVID pandemic relief efforts, coordinating the rescue and support of over 3000 families in need.",
    },
    {
      name: "HouseItt",
      imgSrc: HouseItt,
      title: "Business Development Associate",
      desc: "Collected, analyzed, and synthesized data pertaining to student housing, enabling informed decision-making processes and strategic planning initiatives.",
    },
    {
      name: "InternBit",
      imgSrc: InternBit,
      title: "Campus Ambassador",
      desc: "Successfully led a group of over 150 students as part of the InternBit Campus Partner program, demonstrating effective leadership and organizational skills in managing a large team",
    },
    {
      name: "CBIT Open Source Community",
      imgSrc: COSC,
      title: "Volunteer",
      desc: "Volunteered for Django V2.0 conducted by CBIT open source community.",
    },
  ];

  return (
    <>
      <section id="leadership" className="mt-24">
        <div className="container mx-auto px-4">
          <p className="text-center">Contributions beyond resume</p>
          <h1 className="text-3xl text-center mb-8">
            Leadership / Other Experience
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 justify-center">
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border flex-wrap border-gray-400 border-solid p-4 items-center justify-center md:w-76 h-auto"
              >
                <div className="flex items-center ">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={item.imgSrc}
                    alt={item.name}
                  />
                  <div className="flex flex-col align-baseline">
                    <p className="text-sm mt-2 font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.title}</p>
                  </div>
                </div>
                <div className="flex align-baseline mb-2 mt-2">
                  <p className="text-gray-700 align-baseline">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Leadership;
