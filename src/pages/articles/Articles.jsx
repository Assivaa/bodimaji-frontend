import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Articles from "../../components/articles/Articles";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

const News = () => {
  return (
    <>
      <Navbar />
      <Articles />
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default News;
