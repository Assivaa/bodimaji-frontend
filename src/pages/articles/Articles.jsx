import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

import "./articles.css";

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
            <div className="all-article-container" key={article._id}>
              <img
                className="all-article-photo"
                src={article.img}
                alt="blank-article"
              />
              <div className="all-article-head">{article.title}</div>
              <div className="all-article-description">
                {article.description}
              </div>
              <button className="all-article-button">
                <Link to={`/article/${article._id}`} className="Link">
                  Read More
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default AllArticle;
