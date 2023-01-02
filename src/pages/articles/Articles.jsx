import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import ArticlesCard from "../../components/articlesCard/ArticlesCard";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

import { Link } from "react-router-dom";
import axios from "axios";
import { rootAPI } from "../home/Home";

const AllArticle = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const { data } = await axios.get(rootAPI + "/article");
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <>
      <Navbar />
      <div className="all-article-body">
        <div className="all-article-header">Article</div>
        <div className="all-article-wrapper">
          {articles.map((article) => (
            <ArticlesCard article={article} key={article._id} />
          ))}
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default AllArticle;
