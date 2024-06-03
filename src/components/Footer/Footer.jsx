import React from "react";

const Footer = () => {
  const navList = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Certifications", link: "#certifications" },
    { name: "Leadership", link: "#leadership" },
    { name: "Publications", link: "#publications" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="h-[17vh] flex justify-around items-center mt-20 p-4 bg-white">
      <div className="hidden md:flex font-poppins">
        <ul className="flex list-none gap-4 text-xl">
          {navList.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="no-underline decoration-white">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden flex flex-wrap justify-center font-poppins">
        {navList.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="no-underline decoration-white px-2 py-1 m-1 text-xl"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Footer;
