import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ArticlesCard from "../../components/articlesCard/ArticlesCard";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

const AllArticle = () => {
  return (
    <>
      <Navbar />
      <div className="all-article-body">
        <div className="all-article-header">Article</div>
        <div className="all-article-wrapper">
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default AllArticle;
