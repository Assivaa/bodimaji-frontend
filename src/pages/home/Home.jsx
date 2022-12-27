import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Main from "../../components/main/Main";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Discover from "../../components/discover/Discover";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <BeforeFooter />
      <Discover />
      <Footer />
    </>
  );
};

export default Home;
