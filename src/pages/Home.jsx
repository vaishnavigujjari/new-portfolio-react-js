import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Publications from "../components/Publications";
import Leadership from "../components/Leadership";
import Testimonials from "../components/Testimonials";
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
      <Publications />
      <Leadership />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
