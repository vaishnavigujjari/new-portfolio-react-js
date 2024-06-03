import React from "react";
import Sairam from "../../assets/testimonials/sairam.jpeg";
import Sirisha from "../../assets/testimonials/sirisha.jpeg";
import Swathi from "../../assets/testimonials/swathi.jpeg";
import Nikhil from "../../assets/testimonials/nikhil.jpeg";

const Testimonials = () => {
  const items = [
    {
      name: "Sairam Utukuru",
      imgSrc: Sairam,
      desc: "Few students have the capacity and motivation to present a unique perspective while also valuing their thirst for knowledge, Vaishnavi is undeniably one of these students.",
      designation: "Assistant Professor, CBIT",
      color: "bg-blue-100",
      title: "Several of her questions aided my study.",
    },
    {
      name: "Dr. Swathi Sowmya Bavirthi",
      imgSrc: Swathi,
      desc: "She is a determined and committed individual and never shied away from seeking help and expanding her knowledge curve.",
      designation: "Assistant Professor, CBIT",
      color: "bg-rose-100",
      title: "A fantastic leader and multi-talented team player. ",
    },
    {
      name: "Sirisha Alamanda",
      imgSrc: Sirisha,
      desc: " She performed an excellent job of handling numerous things at once, as I had expected, and I saw her dedication and commitment to her work.",
      designation: "Assistant Professor, CBIT",
      color: "bg-fuchsia-100",
      title: "Vaishnavi is a multitasker and a voracious student.",
    },
    {
      name: "Sai Nikhil Reddy Vatti",
      imgSrc: Nikhil,
      desc: "Under her guidance, every intern developed their skills to the extent that they were all successfully offered full-time positions.",
      designation: "Full Stack Developer, eIQ Digital",
      color: "bg-pink-100",
      title:
        "She is an exceptional team player and a highly dedicated professional.",
    },
  ];

  return (
    <section id="testimonials" className="mt-24">
      <div className="container mx-auto px-4">
        <p className="text-center">Read What Others Say</p>
        <h1 className="text-3xl text-center mb-8">Testimonials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border flex-wrap border-gray-400 border-solid p-4 justify-center md:w-76 h-72"
            >
              <div className="mb-4">
                <div className="text-gray-900 text-center font-bold text-lg mb-2">
                  {item.title}
                </div>
                <p className="text-gray-700">{item.desc}</p>
              </div>
              <div className="flex items-center justify-center text-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={item.imgSrc}
                  alt={item.name}
                />
                <div className="text-center">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
