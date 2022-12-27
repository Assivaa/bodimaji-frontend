import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ArticlePage from "../../components/article/Article";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

const Article = () => {
  return (
    <>
      <Navbar />
      <ArticlePage />
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Article;
