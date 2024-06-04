import React from "react";
import {
  FrontEnd,
  BackEnd,
  Database,
  Tools,
  Others,
  Languages,
} from "./variables";

const Skills = () => {
  const items = [
    { name: "Programming Languages", link: Languages },
    { name: "Front End Technologies", link: FrontEnd },
    { name: "Back End Technologies", link: BackEnd },
    { name: "Database Technologies", link: Database },
    { name: "Tools", link: Tools },
    { name: "Others", link: Others },
  ];
  return (
    <>
      <section
        id="skills"
        className="m-auto mt-24 flex flex-col items-center justify-center"
      >
        <p className="text-center">Showcasing my</p>
        <h1 className="text-3xl text-center">Skills</h1>
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8 mt-8 w-5/6">
          {items.map((itemGroup, index) => (
            <div
              key={index}
              className="flex items-center justify-center  flex-row"
            >
              <div
                key={index}
                className="flex flex-col justify-center items-center rounded-3xl border border-gray-400 
                border-solid p-4 w-full md:max-w-[1000px] mb-4 text-md h-auto"
              >
                <h2 className="mb-2">{itemGroup.name}</h2>
                <div className="flex flex-wrap justify-center">
                  {itemGroup.link.map((item, index) => (
                    <img
                      key={index}
                      src={item.imgSrc}
                      alt={item.name}
                      className="h-[80px] w-[80px] p-2"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
