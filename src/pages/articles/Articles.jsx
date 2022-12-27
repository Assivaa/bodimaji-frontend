import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Articles from "../../components/articles/Articles";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";

const News = () => {
  return (
    <>
      <Navbar />
      <Articles />
      <BeforeFooter />
    </>
  );
};

export default News;
