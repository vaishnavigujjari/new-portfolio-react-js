import React from "react";
import IJRASET from "../../assets/research/ijraset.png";

const Publications = () => {
  const items = [
    {
      name: "Recommendations of Insurance Products based on User Behaviour",
      logo: IJRASET,
      link: "https://www.ijraset.com/fileserve.php?FID=35642",
      desc: "Developed and implemented a novel recommender system for predicting insurance products based on user lifestyle choices, utilizing machine learning techniques including Random Forest, Logistic Regression, XGBoost, and Decision Tree algorithms.",
    },
  ];

  return (
    <>
      <section id="projects" className="mt-24">
        <p className="text-center">Browse my recent</p>
        <h1 className="text-3xl text-center">Publications</h1>
        <div className="w-full px-4 md:w-3/4 lg:w-2/3 xl:w-3/4 mx-auto mt-8 max-w-screen-xl">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 rounded-3xl border border-gray-400 border-solid p-4"
            >
              <div className="flex flex-col md:flex-row justify-center items-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-[200px] w-[200px]"
                />
                <div className="text-center md:text-left ml-4">
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="pointer"
                  >
                    <p className="mt-2">{item.link}</p>
                  </a>
                  <p className="mt-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Publications;
