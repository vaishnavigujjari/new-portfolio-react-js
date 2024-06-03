import React, { useState } from "react";
import "../../styles.css";

const Header = () => {
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

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="h-[17vh] flex justify-around items-center p-4 bg-white">
        <div className="font-poppins text-2xl">
          <a href="#profile">
            <h1>Vaishnavi Gujjari</h1>
          </a>
        </div>
        <div className="hidden md:flex font-poppins">
          <ul className="flex justify-around items-center gap-8 text-lg">
            {navList.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="no-underline decoration-white">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <button
            id="menu-button"
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute top-[17vh] left-0 w-full bg-white p-4 font-poppins">
              <ul className="flex flex-col gap-4 text-xl">
                {navList.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="no-underline decoration-white"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
