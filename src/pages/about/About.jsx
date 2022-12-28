import React from "react";
import Navbar from "../../components/navbar/Navbar";
import AboutPage from "../../components/about/About";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutPage />
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default About;
