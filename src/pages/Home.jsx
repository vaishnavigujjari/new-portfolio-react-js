import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
